"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuClipboard, LuClipboardCheck } from "react-icons/lu"; // Clipboard icons

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  // Function to handle copying the code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
    });
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900">
      {/* Copy Icon */}
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 text-white transition-transform duration-300 ease-in-out hover:text-green-500 focus:outline-none"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <LuClipboardCheck className="w-5 h-5 animate-pulse text-green-400" />
        ) : (
          <LuClipboard className="w-5 h-5" />
        )}
      </button>

      {/* Copy feedback */}
      {copied && (
        <span className="absolute right-12 top-3 text-xs text-green-400 animate-fade-in-out">
          Copied!
        </span>
      )}

      {/* Syntax Highlighter */}
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          padding: "1.5rem 1rem",
          backgroundColor: "transparent",
        }}
        className="text-sm"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;