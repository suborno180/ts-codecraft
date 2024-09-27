"use client";
import CodeBlock from "@/components/others/CodeBlock";
import React, { useState } from "react";

// Define TypeScript types for your data
type Parameter = {
  name: string;
  type: string;
  description: string;
};

type ReturnDetail = {
  type: string;
  description: string;
};

type Example = {
  code: string;
  output: string;
};

type FunctionDetail = {
  functionName: string;
  signature: string;
  description: string;
  parameters: Parameter[];
  returns: ReturnDetail;
  example: Example;
  seoKeywords: string[];
};

type Group = {
  groupName: string;
  groupDescription: string;
  functions: FunctionDetail[];
};
const initialData = {
  title: "Utility Functions Documentation",
  description: "Comprehensive guide for all utility functions in the utilityFunctions library.",
  groups: [
    {
      groupName: "String Manipulation",
      groupDescription: "Functions that assist in manipulating and validating strings.",
      functions: [
        {
          functionName: "capitalizeFirstLetter",
          signature: "capitalizeFirstLetter(input: string): string",
          description: "Capitalizes the first letter of the given string.",
          parameters: [
            {
              name: "input",
              type: "string",
              description: "The string to capitalize.",
            },
          ],
          returns: {
            type: "string",
            description: "The input string with the first letter capitalized.",
          },
          example: {
            code: "const capitalized = capitalizeFirstLetter('hello world');\nconsole.log(capitalized); // Output: 'Hello world'",
            output: "Hello world",
          },
          seoKeywords: ["capitalize string", "string utilities", "string manipulation"],
        },
        {
          functionName: "trimString",
          signature: "trimString(input: string): string",
          description: "Trims whitespace from both ends of the input string.",
          parameters: [
            {
              name: "input",
              type: "string",
              description: "The string to trim.",
            },
          ],
          returns: {
            type: "string",
            description: "The trimmed string.",
          },
          example: {
            code: "const trimmed = trimString('   Hello World   ');\nconsole.log(trimmed); // Output: 'Hello World'",
            output: "Hello World",
          },
          seoKeywords: ["trim whitespace", "string trimming", "utility functions"],
        },
      ],
    },
    {
      groupName: "Array Operations",
      groupDescription: "Functions that assist in manipulating arrays.",
      functions: [
        {
          functionName: "mergeArrays",
          signature: "mergeArrays(arr1: any[], arr2: any[]): any[]",
          description: "Merges two arrays into one.",
          parameters: [
            {
              name: "arr1",
              type: "any[]",
              description: "The first array.",
            },
            {
              name: "arr2",
              type: "any[]",
              description: "The second array.",
            },
          ],
          returns: {
            type: "any[]",
            description: "An array containing elements from both input arrays.",
          },
          example: {
            code: "const merged = mergeArrays([1, 2, 3], [4, 5, 6]);\nconsole.log(merged); // Output: [1, 2, 3, 4, 5, 6]",
            output: "[1, 2, 3, 4, 5, 6]",
          },
          seoKeywords: ["merge arrays", "array utilities", "array operations"],
        },
      ],
    },
  ],
};

const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<typeof initialData>(initialData);
  const [jsonOutput, setJsonOutput] = useState<string>("");

  const handleGroupChange = (groupIndex: number, field: keyof Group, value: string) => {
    const updatedGroups = [...data.groups];
    updatedGroups[groupIndex] = {
      ...updatedGroups[groupIndex],
      [field]: value,
    };
    setData({ ...data, groups: updatedGroups });
  };

  const handleFunctionChange = (
    groupIndex: number,
    funcIndex: number,
    field: keyof FunctionDetail,
    value: string
  ) => {
    const updatedGroups = [...data.groups];
    const updatedFunctions = [...updatedGroups[groupIndex].functions];

    updatedFunctions[funcIndex] = {
      ...updatedFunctions[funcIndex],
      [field]: value,
    };
    updatedGroups[groupIndex].functions = updatedFunctions;

    setData({ ...data, groups: updatedGroups });
  };

  const handleParameterChange = (
    groupIndex: number,
    funcIndex: number,
    paramIndex: number,
    field: keyof Parameter,
    value: string
  ) => {
    const updatedGroups = [...data.groups];
    const updatedFunctions = [...updatedGroups[groupIndex].functions];
    const updatedParameters = [...updatedFunctions[funcIndex].parameters];

    updatedParameters[paramIndex] = {
      ...updatedParameters[paramIndex],
      [field]: value,
    };
    updatedFunctions[funcIndex].parameters = updatedParameters;
    updatedGroups[groupIndex].functions = updatedFunctions;

    setData({ ...data, groups: updatedGroups });
  };

  const handleExampleChange = (
    groupIndex: number,
    funcIndex: number,
    field: keyof Example,
    value: string
  ) => {
    const updatedGroups = [...data.groups];
    const updatedFunctions = [...updatedGroups[groupIndex].functions];
    
    updatedFunctions[funcIndex].example = {
      ...updatedFunctions[funcIndex].example,
      [field]: value,
    };
    updatedGroups[groupIndex].functions = updatedFunctions;

    setData({ ...data, groups: updatedGroups });
  };

  const getJsonData = () => {
    return JSON.stringify(data, null, 2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJsonOutput(getJsonData());
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="mb-8">{data.description}</p>

      <form onSubmit={handleSubmit} className="mb-8">
        {data.groups.map((group, groupIndex) => (
          <div key={groupIndex} className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-xl font-semibold mb-2">{group.groupName}</h2>
            <p className="mb-4">{group.groupDescription}</p>

            <input
              type="text"
              value={group.groupName}
              onChange={(e) => handleGroupChange(groupIndex, "groupName", e.target.value)}
              className="border rounded p-2 w-full mb-4"
              placeholder="Group Name"
            />

            <textarea
              value={group.groupDescription}
              onChange={(e) => handleGroupChange(groupIndex, "groupDescription", e.target.value)}
              className="border rounded p-2 w-full mb-4"
              placeholder="Group Description"
            />

            <h3 className="text-lg font-semibold mb-2">Functions:</h3>
            {group.functions.map((func, funcIndex) => (
              <div key={funcIndex} className="mb-4">
                <h4 className="font-bold">{func.functionName}</h4>
                <p>{func.description}</p>
                <pre className="bg-gray-200 p-2 rounded mb-2">{func.signature}</pre>

                <input
                  type="text"
                  value={func.functionName}
                  onChange={(e) => handleFunctionChange(groupIndex, funcIndex, "functionName", e.target.value)}
                  className="border rounded p-2 w-full mb-2"
                  placeholder="Function Name"
                />

                {func.parameters.map((param, paramIndex) => (
                  <div key={paramIndex} className="mb-2">
                    <h5 className="font-semibold">Parameter: {param.name}</h5>
                    <input
                      type="text"
                      value={param.name}
                      onChange={(e) => handleParameterChange(groupIndex, funcIndex, paramIndex, "name", e.target.value)}
                      className="border rounded p-2 w-full mb-1"
                      placeholder="Parameter Name"
                    />
                    <input
                      type="text"
                      value={param.type}
                      onChange={(e) => handleParameterChange(groupIndex, funcIndex, paramIndex, "type", e.target.value)}
                      className="border rounded p-2 w-full mb-1"
                      placeholder="Parameter Type"
                    />
                    <textarea
                      value={param.description}
                      onChange={(e) => handleParameterChange(groupIndex, funcIndex, paramIndex, "description", e.target.value)}
                      className="border rounded p-2 w-full"
                      placeholder="Parameter Description"
                    />
                  </div>
                ))}

                {/* New Fields for Example Code and Output */}
                <h5 className="font-semibold mt-4">Example Code:</h5>
                <textarea
                  value={func.example.code}
                  onChange={(e) => handleExampleChange(groupIndex, funcIndex, "code", e.target.value)}
                  className="border rounded p-2 w-full mb-1"
                  placeholder="Example Code"
                />
                <h5 className="font-semibold mt-4">Expected Output:</h5>
                <textarea
                  value={func.example.output}
                  onChange={(e) => handleExampleChange(groupIndex, funcIndex, "output", e.target.value)}
                  className="border rounded p-2 w-full mb-1"
                  placeholder="Expected Output"
                />
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>

      {jsonOutput && (
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2">JSON Output:</h2>
          <CodeBlock code={jsonOutput} language="json" />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;