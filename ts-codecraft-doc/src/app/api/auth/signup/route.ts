import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

// Path to the user.json file outside of the src directory
const userDbPath = path.join(process.cwd(), 'db', 'user.json');

// Function to read user data from JSON file
const getUsersFromJson = () => {
  try {
    const data = fs.readFileSync(userDbPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return []; // Return an empty array if the file is empty or doesn't exist
  }
};

// Function to write updated user data to the JSON file
const saveUsersToJson = (users: any) => {
  fs.writeFileSync(userDbPath, JSON.stringify(users, null, 2), 'utf8');
};

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  // Basic validation
  if (!email || !password || !name) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Read existing users from the JSON file
  const users = getUsersFromJson();

  // Check if the user already exists
  const existingUser = users.find((user: any) => user.email === email);
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists.' }, { status: 409 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the new user object
  const newUser = {
    id: users.length + 1, // Auto incrementing ID
    name,
    email,
    password: hashedPassword,
  };

  // Add the new user to the list of users and save it to the JSON file
  users.push(newUser);
  saveUsersToJson(users);

  // Return the newly created user (excluding password)
  return NextResponse.json({ user: { id: newUser.id, name: newUser.name, email: newUser.email } }, { status: 201 });
}
