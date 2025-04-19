import React from "react"
import useMarkdownStore from "../store";
import CodeBlock from "../tools/CodeBlock";



const MarkdownPage = () => {
    const {formattedMdText} = useMarkdownStore();

    return (
        <div className="flex justify-center h-screen py-12">
                <CodeBlock>{formattedMdText}</CodeBlock>
        </div>
    );
};

export default MarkdownPage;