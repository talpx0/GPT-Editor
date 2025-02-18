import React from "react";
import { NavLink } from "react-router";
import useMarkdownStore from "./store.tsx";
import { formatMathExpressions } from "./tools/formatter.ts";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";


const downloadMarkdown = (content: string) => {
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "document.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};



const SplitView = () => {
  const { markdown, setMarkdown } = useMarkdownStore();
  const formattedContent = formatMathExpressions(markdown);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col p-4">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-white text-lg font-semibold">Input</h2>
          <NavLink 
            to={'/download'} 
            className="px-6 py-3 text-white bg-gradient-to-r from-indigo-900 to-blue-700 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-indigo-900 hover:shadow-blue-500/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/70"
          >
            Download
          </NavLink>
        </div>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="flex-grow text-white text-lg rounded-lg p-4 resize-none outline-none bg-[#303030]"
        />
      </div>
      <div className="w-1/2 flex flex-col p-4  overflow-hidden">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-white text-lg font-semibold">Preview</h2>
          <button
            onClick={()=>downloadMarkdown(formattedContent)}
              className="px-6 py-3 text-white bg-gradient-to-r from-indigo-900 to-blue-700 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-indigo-900 hover:shadow-blue-500/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/70"
            >
              Markdown
          </button>
        </div>
          <ReactMarkdown
            className="flex-grow p-4 text-white rounded-lg prose prose-invert max-w-none overflow-auto"
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex,remarkGfm]}
          >
            {formattedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

function App() {
  return <SplitView />;
}

export default App;
