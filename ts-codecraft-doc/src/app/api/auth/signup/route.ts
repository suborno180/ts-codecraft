// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  // Basic validation
  if (!email || !password || !name) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists.' }, { status: 409 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // Return the newly created user (without the password)
  return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } }, { status: 201 });
}
