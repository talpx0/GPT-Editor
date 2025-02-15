import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";


const MarkdownRenderer = ({ content }) => {
    return (
      <ReactMarkdown
        className="flex-grow p-4 text-white rounded-lg prose prose-invert max-w-none"
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    );
  };



  export default MarkdownRenderer