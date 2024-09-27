import React from "react";
import { Card } from "@/components/ui/card";
import utilitiesData from "../utilitiesData"; // Adjust the path accordingly
import { LuBookOpenCheck } from "react-icons/lu";
import CodeBlock from "@/components/others/CodeBlock";

const StringUtilitiesPage = () => {
  return (
    <>
      {/* Content Area */}
      <div className="flex-grow w-full dark:bg-gray-900 p-4 md:p-8">
        <Card className="max-w-6xl min-h-screen mx-auto space-y-8 p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <LuBookOpenCheck className="text-green-500" />
              <span>String Utility Functions</span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Below are the string utility functions provided in the <span className="font-semibold">ts-codecraft</span> library, along with examples of how to use them.
            </p>
          </div>

          {utilitiesData.map((utility, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {index + 1}. `{utility.signature}`
              </h2>
              <p className="text-gray-700 dark:text-gray-400">{utility.description}</p>
              <CodeBlock code={utility.example} language="typescript" />
            </div>
          ))}
        </Card>
      </div>
    </>
  );
};

export default StringUtilitiesPage;
