import React, { useEffect, useRef, useState } from "react";
import useMarkdownStore from "./store.tsx";
import { formatMathExpressions} from "./tools/formatter.ts";
import MarkdownRenderer from "./tools/MarkdownRenderer.tsx";
import { IconButton } from "./tools/IconButton.tsx";
import { Download, Eye, FileText } from "lucide-react";
import useScrollSync from "./hook/useScrollSync.tsx";




const downloadMarkdown = (content: string) => {
  const now = new Date();
  const getFormattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, 
  }).format(now).replace(',', '-');
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${getFormattedDate}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};



const SplitView = () => {
  const { markdownText, setMarkdown} = useMarkdownStore();
  const formattedContent = formatMathExpressions(markdownText);
  
  

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useScrollSync(inputRef, previewRef);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col p-4">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-white text-lg font-semibold">Input</h2>
          <IconButton as="nav" to="/download" icon={Eye} label="Preview" />
        </div>

        <textarea
          ref={inputRef}                     
          value={markdownText}
          onChange={(e) => setMarkdown(e.target.value ,null)}
          className="flex-grow text-white bg-[#303030] rounded-lg p-4 text-lg
                     resize-none outline-none overflow-auto"  
        />
      </div>

    
      <div className="w-1/2 flex flex-col p-4 overflow-hidden">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-white text-lg font-semibold">Quick View</h2>
          <div className="flex gap-3">
            <IconButton
              onClick={() => downloadMarkdown(formattedContent)}
              icon={Download}
              label="Download markdown"
            />
            <IconButton
              as="nav"
              to="/markdown"
              icon={FileText}
              label="Raw markdown"
              onClick={()=> setMarkdown(null, formattedContent)}
            />
          </div>
        </div>


        <div
          ref={previewRef}                                
          className="flex-grow p-4 text-white rounded-lg prose prose-invert
                     max-w-none overflow-auto" /* important: overflow-auto */
        >
          <MarkdownRenderer content={formattedContent} />
        </div>
      </div>
    </div>
  );
};

function App() {
  return <SplitView />;
}

export default App;
