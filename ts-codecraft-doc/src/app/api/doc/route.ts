import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import { z } from 'zod';

const prisma = new PrismaClient();

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

// Function to handle GET requests
export async function GET(req: NextRequest) {
    try {
        // No authentication required for GET
        const documentation = await prisma.documentation.findMany({
            include: {
                groups: {
                    include: {
                        functions: {
                            include: {
                                parameters: true,
                                Return: true,
                            },
                        },
                    },
                },
            },
        });

        return NextResponse.json(documentation);
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error fetching documentation:", message);
        return createErrorResponse(message, 500);
    } finally {
        await prisma.$disconnect();
    }
}

// Function to handle POST requests
export async function POST(req: NextRequest) {
    try {
        await authenticate(req); // Authenticate for POST
        
        const data = await req.json();
        DocumentationSchema.parse(data); // Validate incoming data

        const newDocumentation = await prisma.documentation.create({
            data: {
                title: data.title,
                description: data.description,
                groups: {
                    create: data.groups.map((group: any) => ({
                        name: group.name,
                        description: group.description,
                        functions: {
                            create: group.functions.map((func: any) => ({
                                name: func.name,
                                signature: func.signature,
                                description: func.description,
                                exampleCode: func.exampleCode,
                                exampleOutput: func.exampleOutput,
                                seoKeywords: func.seoKeywords.join(','), // Convert array to string if needed
                                parameters: {
                                    create: func.parameters.map((param: any) => ({
                                        name: param.name,
                                        type: param.type,
                                        description: param.description,
                                    })),
                                },
                                returnId: func.returnId,
                            })),
                        },
                    })),
                },
            },
            include: {
                groups: {
                    include: {
                        functions: {
                            include: {
                                parameters: true,
                                Return: true,
                            },
                        },
                    },
                },
            },
        });

        return NextResponse.json(newDocumentation, { status: 201 });
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error creating documentation:", message);
        return createErrorResponse(message, 500);
    } finally {
        await prisma.$disconnect();
    }
}

// Function to handle PUT requests
export async function PUT(req: NextRequest) {
    try {
        await authenticate(req); // Authenticate for PUT
        
        const { id, title, description } = await req.json();
        
        const updatedDocumentation = await prisma.documentation.update({
            where: { id },
            data: { title, description },
        });

        return NextResponse.json(updatedDocumentation);
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error updating documentation:", message);
        return createErrorResponse(message, 500);
    } finally {
        await prisma.$disconnect();
    }
}

// Function to handle DELETE requests
export async function DELETE(req: NextRequest) {
    try {
        await authenticate(req); // Authenticate for DELETE
        
        const { id } = await req.json();
        
        await prisma.documentation.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Documentation deleted successfully." });
    } catch (error: unknown) {
        const message = (error instanceof Error) ? error.message : "An unexpected error occurred.";
        console.error("Error deleting documentation:", message);
        return createErrorResponse(message, 500);
    } finally {
        await prisma.$disconnect();
    }
}
