-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Documentation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Group" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "documentationId" INTEGER NOT NULL,
    CONSTRAINT "Group_documentationId_fkey" FOREIGN KEY ("documentationId") REFERENCES "Documentation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Function" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "description" TEXT,
    "exampleCode" TEXT,
    "exampleOutput" TEXT,
    "seoKeywords" TEXT,
    "groupId" INTEGER NOT NULL,
    "returnId" INTEGER NOT NULL,
    CONSTRAINT "Function_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Parameter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "functionId" INTEGER NOT NULL,
    CONSTRAINT "Parameter_functionId_fkey" FOREIGN KEY ("functionId") REFERENCES "Function" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Return" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "functionId" INTEGER NOT NULL,
    CONSTRAINT "Return_functionId_fkey" FOREIGN KEY ("functionId") REFERENCES "Function" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Function_groupId_idx" ON "Function"("groupId");
