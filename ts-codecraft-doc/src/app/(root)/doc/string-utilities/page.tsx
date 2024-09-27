import React from "react";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuBookOpenCheck } from "react-icons/lu";

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

          {/* Function 1: generateRandomString */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              1. `generateRandomString(length: number): string`
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Generates a random string of specified length with alphanumeric and special characters.
            </p>
            <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
              {`import { generateRandomString } from 'string-utilities/generateRandomString';

const randomString = generateRandomString(10);
console.log(randomString); // Example output: "aB3!zG1@kl"`}
            </SyntaxHighlighter>
          </div>

          {/* Function 2: isEmailValid */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              2. `isEmailValid(email: string): boolean`
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Validates if the provided string is a valid email address.
            </p>
            <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
              {`import { isEmailValid } from 'string-utilities/isEmailValid';

const emailCheck = isEmailValid("test@example.com");
console.log(emailCheck); // Output: true`}
            </SyntaxHighlighter>
          </div>

          {/* Function 3: isPalindrome */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              3. `isPalindrome(str: string): boolean`
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Checks if the given string is a palindrome (ignoring case and non-alphanumeric characters).
            </p>
            <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
              {`import { isPalindrome } from 'string-utilities/isPalindrome';

const palindromeCheck = isPalindrome("A man, a plan, a canal: Panama");
console.log(palindromeCheck); // Output: true`}
            </SyntaxHighlighter>
          </div>

          {/* Function 4: isPhoneNumberValid */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              4. `isPhoneNumberValid(phone: string): boolean`
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Validates a phone number using the E.164 format.
            </p>
            <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
              {`import { isPhoneNumberValid } from 'string-utilities/isPhoneNumberValid';

const phoneCheck = isPhoneNumberValid("+123456789012");
console.log(phoneCheck); // Output: true`}
            </SyntaxHighlighter>
          </div>

          {/* Function 5: isStrongPassword */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              5. `isStrongPassword(password: string): boolean`
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Checks if a password is strong based on conditions (length, uppercase, lowercase, numbers, symbols).
            </p>
            <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
              {`import { isStrongPassword } from 'string-utilities/isStrongPassword';

const passwordCheck = isStrongPassword("Password123!");
console.log(passwordCheck); // Output: true`}
            </SyntaxHighlighter>
          </div>

          {/* Function 6: isURLValid */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              6. `isURLValid(url: string): boolean`
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Validates if the provided string is a valid URL.
            </p>
            <SyntaxHighlighter language="typescript" style={atomDark} className="rounded-lg">
              {`import { isURLValid } from 'string-utilities/isURLValid';

const urlCheck = isURLValid("https://www.example.com");
console.log(urlCheck); // Output: true`}
            </SyntaxHighlighter>
          </div>

        </Card>
      </div>
    </>
  );
};

export default StringUtilitiesPage;
