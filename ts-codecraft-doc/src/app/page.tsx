import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuRocket, LuCheckCircle, LuBookOpenCheck } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/others/CodeBlock";

export default function Home() {
  const codeString = `
    import { formatDate } from 'ts-codecraft';
    const formatted = formatDate(new Date(), 'yyyy/MM/dd');
    console.log(formatted); // Outputs: 2024/09/25
  `;

  return (
    <div className="grid bg-white  grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left flex flex-col items-start gap-2">
          Welcome to <span className="text-blue-500 flex items-center gap-3"><LuRocket size={32} color="blue" /> TS CodeCraft</span>
        </h1>
        <p className="text-lg text-center sm:text-left text-gray-600 max-w-lg">
          <strong>TS CodeCraft</strong> is your go-to TypeScript utility library with essential, reusable, and well-crafted functions. Simplify common tasks in development, boost productivity, and avoid writing boilerplate code repeatedly.
        </p>

        {/* Feature Highlights */}
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <LuCheckCircle size={24} color="green" />
          Key Features
        </h2>
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 flex items-center gap-2">
            <LuCheckCircle size={20} color="green" />
            Modular Design – Import only the functions you need.
          </li>
          <li className="mb-2 flex items-center gap-2">
            <LuCheckCircle size={20} color="green" />
            TypeScript First – Designed with TypeScript for strong typing and autocompletion.
          </li>
          <li className="mb-2 flex items-center gap-2">
            <LuCheckCircle size={20} color="green" />
            Highly Optimized – Performance-optimized utility functions for fast execution.
          </li>
          <li className="mb-2 flex items-center gap-2">
            <LuCheckCircle size={20} color="green" />
            Extensive Documentation – Clear explanations, use cases, and examples.
          </li>
        </ul>

        {/* Installation Instructions */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.npmjs.com/package/ts-codecraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuRocket size={20} />
            Install via npm
          </a>
          <code className="bg-black/[.05] dark:bg-white/[.06] px-2 py-1 rounded font-semibold">
            npm install ts-codecraft
          </code>
        </div>

        {/* Code Example with Syntax Highlighter */}
        <h2 className="text-2xl font-semibold mt-8 flex items-center gap-2">
          <LuBookOpenCheck size={24} color="purple" />
          Usage Example
        </h2>
        <p className="text-gray-600 max-w-md text-center sm:text-left">
          Check out a sample function from the library:
        </p>

        <CodeBlock code={codeString} language="typescript" />

        {/* Call to Action */}
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
          <Link
            href="/doc/installation"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-3">
              <span className="mr-2">
                <LuBookOpenCheck size={20} />
              </span>
              Read Full Documentation
            </Button>
          </Link>
          <Link
            href="https://github.com/suborno180/ts-codecraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-3" variant={'ghost'}>
              <span className="mr-2">
                <LuRocket size={20} />
              </span>
              View on GitHub
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
