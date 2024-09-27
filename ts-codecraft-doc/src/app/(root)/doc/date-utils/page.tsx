import React from "react";
import { Card } from "@/components/ui/card"; // Use your own Card component
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuCalendar, LuCheckCircle } from "react-icons/lu"; // Import icons from react-icons

const DocumentationPage = () => {
  return (
    <>
      {/* Content Area */}
      <div className="flex-grow w-full dark:bg-gray-900 p-4 md:p-8">
        <Card className="max-w-6xl min-h-screen mx-auto space-y-8 p-6">
          {/* Header Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <LuCalendar className="text-green-500" />
              <span>Documentation: <span className="text-green-600">Date Utils Library</span></span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Explore the utility functions provided by the <span className="font-semibold">Date Utils</span> library and how to use them in your projects.
            </p>
          </div>

          {/* Function Documentation Section */}
          <div className="space-y-4">
            {/* Function 1: addDays */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LuCheckCircle className="text-green-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  addDays(date: Date, days: number): Date
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                Adds a specified number of days to the given date.
              </p>
              <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
                {`const newDate = addDays(new Date(), 5); // Adds 5 days to today's date
// Example Result: ${new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString()}`}
              </SyntaxHighlighter>
            </div>

            {/* Function 2: differenceInDays */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LuCheckCircle className="text-green-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  differenceInDays(startDate: Date, endDate: Date): number
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                Calculates the number of days between two dates.
              </p>
              <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
                {`const daysDiff = differenceInDays(new Date('2024-01-01'), new Date('2023-12-25')); // Returns 7
// Example Result: daysDiff will be 7`}
              </SyntaxHighlighter>
            </div>

            {/* Function 3: formatDate */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LuCheckCircle className="text-green-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  formatDate(date: Date, format: string): string
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                Formats a date into a specified string format.
              </p>
              <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
                {`const formattedDate = formatDate(new Date(), 'YYYY-MM-DD'); // Returns today's date in YYYY-MM-DD format
// Example Result: formattedDate will be ${new Date().toISOString().split('T')[0]}`}
              </SyntaxHighlighter>
            </div>

            {/* Function 4: isWeekend */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LuCheckCircle className="text-green-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  isWeekend(date: Date): boolean
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                Checks if a given date falls on a weekend (Saturday or Sunday).
              </p>
              <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
                {`const isWeekendDate = isWeekend(new Date()); // Returns true if today is Saturday or Sunday
// Example Result: isWeekendDate will be true or false`}
              </SyntaxHighlighter>
            </div>

            {/* Function 5: startOfWeek */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LuCheckCircle className="text-green-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  startOfWeek(date: Date): Date
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                Returns the starting date of the week for a given date.
              </p>
              <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
                {`const weekStart = startOfWeek(new Date()); // Returns the start date of the current week
// Example Result: weekStart will be ${new Date(new Date().setDate(new Date().getDate() - new Date().getDay())).toLocaleDateString()}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DocumentationPage;
