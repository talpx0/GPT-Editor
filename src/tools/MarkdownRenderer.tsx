import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";


const MarkdownRenderer = ({ content, className}:{content: any, className?: string | null | undefined}) => {
    return (
      <ReactMarkdown
        className= {className}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    );
  };



  export default MarkdownRenderer