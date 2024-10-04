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
    title: z.string().optional(),
    description: z.string().optional(),
    groups: z.array(
        z.object({
            name: z.string(), // Group name is required
            icon: z.string().optional(), // Icon is required
            description: z.string().optional(),
            functions: z.array(
                z.object({
                    name: z.string().optional().default(""),
                    slug: z.string().optional().default(""), // Slug field optional
                    signature: z.string().optional().default(""),
                    description: z.string().optional().default(""),
                    exampleCode: z.array(z.string()).optional().default([]),
                    exampleOutput: z.string().optional().default(""),
                    seoKeywords: z.array(z.string()).optional().default([]),
                    parameters: z.array(
                        z.object({
                            name: z.string().optional().default(""),
                            type: z.string().optional().default(""),
                            description: z.string().optional().default(""),
                        })
                    ).optional().default([]),
                    returnId: z.number().optional(),
                }).optional().default({}) // Defaults to an empty object if not provided
            ).optional().default([]),
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
    return documentation.find((doc: { id: number }) => doc.id === id);
}

// Fetcher to get documentation by title (case-insensitive)
async function getDocumentationByTitle(title: string) {
    const documentation = readDocumentationFromJson();
    return documentation.filter((doc: { title: string }) => doc.title.toLowerCase().includes(title.toLowerCase()));
}

// Fetcher to get the total number of documents
async function getTotalDocumentationCount() {
    const documentation = readDocumentationFromJson();
    return documentation.length;
}

// Function to handle POST requests
export async function POST(req: NextRequest) {
    try {
        // Authenticate request (if needed)
        await authenticate(req);

        // Parse the request body
        const data = await req.json();
        DocumentationSchema.parse(data); // Validate incoming data

        // Read existing documentation
        const documentation = readDocumentationFromJson();

        // Create new documentation entry
        const newDocumentation = {
            id: documentation.length + 1, // Generate new ID
            title: data.title || "", // Default to an empty string if not provided
            description: data.description || "", // Default to an empty string if not provided
            groups: data.groups.map((group: { name: string; icon?: string; description?: string; functions?: any[] }) => ({
                name: group.name,
                icon: group.icon || "", // Default to an empty string if not provided
                description: group.description || "", // Default to an empty string if not provided
                functions: group.functions?.map((func: any) => ({
                    name: func.name || "", // Default to an empty string
                    slug: func.slug || "", // Default to an empty string
                    signature: func.signature || "", // Default to an empty string
                    description: func.description || "", // Default to an empty string
                    exampleCode: func.exampleCode || [], // Default to an empty array
                    exampleOutput: func.exampleOutput || "", // Default to an empty string
                    seoKeywords: func.seoKeywords?.join(',') || "", // Default to an empty string if not provided
                    parameters: func.parameters?.map((param: { name: string; type: string; description?: string }) => ({
                        name: param.name || "", // Default to an empty string
                        type: param.type || "", // Default to an empty string
                        description: param.description || "", // Default to an empty string
                    })) || [], // Default to an empty array if not provided
                    returnId: func.returnId || 0, // Default to 0 if not provided
                })) || [], // Default to an empty array if no functions are provided
            })),
        };

        // Add new documentation to the array and save it
        documentation.push(newDocumentation);
        saveDocumentationToJson(documentation);

        return NextResponse.json(newDocumentation, { status: 201 });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "An unexpected error occurred.";
        console.error("Error creating documentation:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

// Function to handle GET requests (with multiple fetcher options)
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const title = searchParams.get('title');
        const total = searchParams.get('total');
        const groups = searchParams.get('groups'); // New parameter to get group names

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

        // Get only group names in the specified format
        else if (groups === "true") {
            const documentation = readDocumentationFromJson();
            // Extract and format group names
            const groupNames = documentation.flatMap((doc: { groups: { name: string }[] }) =>
                doc.groups.map((group: { name: string }) => ({ group: group.name }))
            );

            const totalGroups = groupNames.length; // Calculate the total number of groups
            responseData = {
                success: true,
                message: "All group names retrieved successfully",
                total: totalGroups, // Include total count of groups
                data: groupNames, // Only formatted group names returned here
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

// Function to handle PUT requests
export async function PUT(req: NextRequest) {
    try {
        await authenticate(req); // Authenticate for PUT

        const { id, title, description } = await req.json();

        const documentation = readDocumentationFromJson();

        const docIndex = documentation.findIndex((doc: { id: number }) => doc.id === id);
        if (docIndex === -1) {
            return createErrorResponse("Documentation not found", 404);
        }

        documentation[docIndex].title = title || "";
        documentation[docIndex].description = description || "";

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
        await authenticate(req);

        const { id } = await req.json();
        const documentation = readDocumentationFromJson();

        const updatedDocumentation = documentation.filter((doc: { id: number }) => doc.id !== id);

        saveDocumentationToJson(updatedDocumentation);

        return NextResponse.json({ success: true, message: "Document deleted successfully" });
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error deleting documentation:", message);
        return createErrorResponse(message, 500);
    }
}
