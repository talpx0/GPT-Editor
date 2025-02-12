import React from "react";
import { NavLink } from "react-router";
import useMarkdownStore from "./store.tsx";
import { formatMathExpressions } from "./tools/formatter.ts";
import MarkdownRenderer from "./tools/MarkdownRenderer.tsx";


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
        <h2 className="text-white text-lg font-semibold">Preview</h2>
        <MarkdownRenderer content={formattedContent} />
      </div>
    </div>
  );
};

function App() {
  return <SplitView />;
}

export default App;
