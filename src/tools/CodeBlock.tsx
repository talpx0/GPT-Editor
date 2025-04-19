import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeBlock = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="relative max-w-4xl overflow-auto bg-gray-900 rounded-md">
      <div
        className="sticky top-0 left-0 z-10      /* glue */
                   flex items-center justify-between px-4 py-2
                   border-b border-gray-700       /* subtle separator */
                   bg-gray-900"                  
      >  <span className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </span>
        <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
          <button className="rounded-md bg-gray-800 px-3 py-1 text-gray-300 hover:bg-gray-700">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>

      {/* (3) scrollable code area */}
      <pre className="overflow-x-auto p-4 text-sm text-gray-300">
        <code>{children}</code>
      </pre>
    </div>
  );
};

      
export default CodeBlock