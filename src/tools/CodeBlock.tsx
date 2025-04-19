import React, { useState, useRef } from "react";

const CodeBlock = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    const text = codeRef.current?.innerText ?? children;
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch(console.error);
  };

  return (
    <div className="relative max-w-4xl overflow-auto bg-gray-900 rounded-md">
      <div
        className="sticky top-0 left-0 z-10 flex items-center justify-between px-4 py-2
                   border-b border-gray-700 bg-gray-900"
      >
        <span className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </span>
        <button
          onClick={handleCopy}
          className="rounded-md bg-gray-800 px-3 py-1 text-gray-300 hover:bg-gray-700"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre
        ref={codeRef}
        className="overflow-x-auto p-4 text-sm text-gray-300 whitespace-pre"
      >
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
