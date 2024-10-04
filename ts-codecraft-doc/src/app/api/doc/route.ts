import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

// Path to the documentation.json file outside of the src directory
const documentationDbPath = path.join(process.cwd(), 'db', 'documentation.json');

// Define the schema for documentation using Zod
const DocumentationSchema = z.object({
    title: z.string(),
    description: z.string(),
    groups: z.array(
        z.object({
            name: z.string(),
            description: z.string().optional(),
            functions: z.array(
                z.object({
                    name: z.string(),
                    signature: z.string(),
                    description: z.string().optional(),
                    exampleCode: z.string().optional(),
                    exampleOutput: z.string().optional(),
                    seoKeywords: z.array(z.string()),
                    parameters: z.array(
                        z.object({
                            name: z.string(),
                            type: z.string(),
                            description: z.string().optional(),
                        })
                    ),
                    returnId: z.number(),
                })
            ),
        })
    ),
});

// Utility functions to read and write to JSON
const readDocumentationFromJson = () => {
    try {
        const data = fs.readFileSync(documentationDbPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return []; // Return an empty array if the file is empty or doesn't exist
    }
};

const saveDocumentationToJson = (data: any) => {
    fs.writeFileSync(documentationDbPath, JSON.stringify(data, null, 2), 'utf8');
};

// Middleware to check for token authorization (used for POST, PUT, DELETE)
async function authenticate(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
        throw new Error("Unauthorized access. Please log in.");
    }
}

// Custom error response
function createErrorResponse(message: string, status: number) {
    return NextResponse.json({ error: message }, { status });
}

// Fetcher to get documentation by ID
async function getDocumentationById(id: number) {
    const documentation = readDocumentationFromJson();
    return documentation.find((doc: any) => doc.id === id);
}

// Fetcher to get documentation by title (case-insensitive)
async function getDocumentationByTitle(title: string) {
    const documentation = readDocumentationFromJson();
    return documentation.filter((doc: any) => doc.title.toLowerCase().includes(title.toLowerCase()));
}

// Fetcher to get the total number of documents
async function getTotalDocumentationCount() {
    const documentation = readDocumentationFromJson();
    return documentation.length;
}

// Function to handle GET requests (with multiple fetcher options)
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const title = searchParams.get('title');
        const total = searchParams.get('total');

        let responseData = {};
        let statusCode = 200;

        // Get by ID
        if (id) {
            const document = await getDocumentationById(Number(id));
            if (!document) {
                return createErrorResponse("Documentation not found", 404);
            }
            responseData = {
                success: true,
                message: "Document retrieved successfully",
                data: document,
            };
        }

        // Get by Title
        else if (title) {
            const documents = await getDocumentationByTitle(title);
            if (documents.length === 0) {
                return createErrorResponse("No matching documents found", 404);
            }
            responseData = {
                success: true,
                message: `${documents.length} document(s) found matching the title: ${title}`,
                data: documents,
            };
        }

        // Get total count
        else if (total === "true") {
            const totalDocuments = await getTotalDocumentationCount();
            responseData = {
                success: true,
                message: "Total document count retrieved successfully",
                total: totalDocuments,
            };
        }

        // Default: Fetch all documents
        else {
            const documentation = readDocumentationFromJson();
            responseData = {
                success: true,
                message: "All documents retrieved successfully",
                total: documentation.length,
                data: documentation,
            };
        }

        return NextResponse.json(responseData, { status: statusCode });
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error fetching documentation:", message);
        return createErrorResponse(message, 500);
    }
}


// Function to handle POST requests
export async function POST(req: NextRequest) {
    try {
        await authenticate(req); // Authenticate for POST

        const data = await req.json();
        DocumentationSchema.parse(data); // Validate incoming data

        const documentation = readDocumentationFromJson();

        const newDocumentation = {
            id: documentation.length + 1, // Generate new ID
            title: data.title,
            description: data.description,
            groups: data.groups.map((group: any) => ({
                name: group.name,
                description: group.description,
                functions: group.functions.map((func: any) => ({
                    name: func.name,
                    signature: func.signature,
                    description: func.description,
                    exampleCode: func.exampleCode,
                    exampleOutput: func.exampleOutput,
                    seoKeywords: func.seoKeywords.join(','), // Convert array to string
                    parameters: func.parameters.map((param: any) => ({
                        name: param.name,
                        type: param.type,
                        description: param.description,
                    })),
                    returnId: func.returnId,
                })),
            })),
        };

        // Add new documentation to the array and save it to the JSON file
        documentation.push(newDocumentation);
        saveDocumentationToJson(documentation);

        return NextResponse.json(newDocumentation, { status: 201 });
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error creating documentation:", message);
        return createErrorResponse(message, 500);
    }
}

// Function to handle PUT requests
export async function PUT(req: NextRequest) {
    try {
        await authenticate(req); // Authenticate for PUT

        const { id, title, description } = await req.json();

        const documentation = readDocumentationFromJson();

        const docIndex = documentation.findIndex((doc: any) => doc.id === id);
        if (docIndex === -1) {
            return createErrorResponse("Documentation not found", 404);
        }

        documentation[docIndex].title = title;
        documentation[docIndex].description = description;

        saveDocumentationToJson(documentation);

        return NextResponse.json(documentation[docIndex]);
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error updating documentation:", message);
        return createErrorResponse(message, 500);
    }
}

// Function to handle DELETE requests
export async function DELETE(req: NextRequest) {
    try {
        await authenticate(req); // Authenticate for DELETE

        const { id } = await req.json();

        let documentation = readDocumentationFromJson();

        const docIndex = documentation.findIndex((doc: any) => doc.id === id);
        if (docIndex === -1) {
            return createErrorResponse("Documentation not found", 404);
        }

        documentation = documentation.filter((doc: any) => doc.id !== id);

        saveDocumentationToJson(documentation);

        return NextResponse.json({ message: "Documentation deleted successfully." });
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error deleting documentation:", message);
        return createErrorResponse(message, 500);
    }
}


// POST example
/**
 * 
 {
    "title": "Sample Documentation m 2",
    "description": "This is a sample documentation.",
    "groups": [
        {
            "name": "Group 1",
            "description": "Description for Group 1",
            "functions": [
                {
                    "name": "Function 1",
                    "signature": "functionName(param1: Type): ReturnType",
                    "description": "Description of Function 1",
                    "exampleCode": "console.log('Example code');",
                    "exampleOutput": "Example output",
                    "seoKeywords": ["keyword1", "keyword2"],  // This should be an array
                    "parameters": [
                        {
                            "name": "param1",
                            "type": "Type",
                            "description": "Parameter description"
                        }
                    ],
                    "returnId": 1
                }
            ]
        }
    ]
}

 * */ 