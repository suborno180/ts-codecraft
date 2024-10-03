"use client"
import React from "react";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuRocket, LuCheckCircle, LuBookOpenCheck } from "react-icons/lu";
import { useSession } from "next-auth/react";

const InstallationPage = () => {
  const {status, data} = useSession();
  console.log(status, data);
  
  return (
    <>
      {/* Content Area */}
      <div className="flex-grow w-full  dark:bg-gray-900 p-4 md:p-8">
        <Card className="max-w-6xl min-h-screen mx-auto space-y-8 p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <LuRocket className="text-green-500" />
              <span>Install <span className="text-green-600">ts-codecraft</span> Library</span>
            </h1>

            <p className="text-gray-700 dark:text-gray-300">
              Follow these steps to install and use the <span className="font-semibold">ts-codecraft</span> library in your Next.js project.
            </p>
          </div>

          {/* Step 1: Install via npm or yarn */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <LuCheckCircle className="text-green-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Step 1: Install via npm or yarn
              </h2>
            </div>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-lg">
              npm install ts-codecraft
            </SyntaxHighlighter>

            <p className="text-gray-700 dark:text-gray-400">Alternatively, use Yarn:</p>

            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-lg">
              yarn add ts-codecraft
            </SyntaxHighlighter>
          </div>

          {/* Step 2: Import and Use */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <LuBookOpenCheck className="text-green-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Step 2: Import and Use in Your Project
              </h2>
            </div>

            <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
              {`import { createUUID, capitalizeString } from 'ts-codecraft';`}
            </SyntaxHighlighter>

            <p className="text-gray-700 dark:text-gray-400">
              Now, use the utilities in your components:
            </p>

            <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
              {`const uniqueID = createUUID();\nconst text = capitalizeString("hello world");`}
            </SyntaxHighlighter>
          </div>
        </Card>
      </div>
    </>
  );
};

export default InstallationPage;
