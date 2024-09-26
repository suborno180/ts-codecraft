import React from "react";
import { Sidebar } from "@/components/others/sidebar"; // Use your own Sidebar component
import { Card } from "@/components/ui/card"; // Use your own Card component
import { twMerge } from "tailwind-merge";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuCalculator, LuCheckCircle } from "react-icons/lu"; // Import icons from react-icons

const DocumentationPage = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Sidebar */}
        <div className={twMerge("sticky top-0 lg:w-64 w-full lg:block")}>
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="flex-grow w-full dark:bg-gray-900 p-4 md:p-8">
          <Card className="max-w-6xl min-h-screen mx-auto space-y-8 p-6">
            {/* Header Section */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <LuCalculator className="text-green-500" />
                <span>Documentation: <span className="text-green-600">ts-codecraft</span> Library</span>
              </h1>
              <p className="text-gray-700 dark:text-gray-300">
                Explore the utility functions provided by <span className="font-semibold">ts-codecraft</span> library and how to use them in your projects.
              </p>
            </div>

            {/* Function Documentation Section */}
            <div className="space-y-4">
              {/* Function 1: getRandomInt */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <LuCheckCircle className="text-green-500" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    getRandomInt(min: number, max: number): number
                  </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-400">
                  Generates a random integer between the specified minimum and maximum values.
                </p>

                <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
                  {`const randomInt = getRandomInt(1, 10); // Returns a random integer between 1 and 10`}
                </SyntaxHighlighter>
              </div>

              {/* Function 2: isEven */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <LuCheckCircle className="text-green-500" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    isEven(num: number): boolean
                  </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-400">
                  Checks if a number is even.
                </p>

                <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
                  {`const isEvenNumber = isEven(4); // Returns true`}
                </SyntaxHighlighter>
              </div>

              {/* Function 3: isOdd */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <LuCheckCircle className="text-green-500" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    isOdd(num: number): boolean
                  </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-400">
                  Checks if a number is odd.
                </p>

                <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
                  {`const isOddNumber = isOdd(3); // Returns true`}
                </SyntaxHighlighter>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
};

export default DocumentationPage;