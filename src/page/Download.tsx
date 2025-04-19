import React, { useEffect, useState } from "react";
import MarkdownRenderer from "../tools/MarkdownRenderer";
import useMarkdownStore from "../store";
import { formatMathExpressions } from "../tools/formatter";
import { useLocation } from "react-router";


const DownloadPage = () => {
    const { markdownText } = useMarkdownStore();
    const formattedContent = formatMathExpressions(markdownText);
    const location = useLocation(); 

    useEffect(() => {
        const newTitle = new Date()
            .toISOString()
            .replace(/:/g, '-')
            .replace('T', '_')
            .split('.')[0];
        document.title = newTitle;
    }, [location]);

    return (
        // Parent now controls scroll with full-screen height and overflow auto
        <div className="flex justify-center p-4 h-screen overflow-auto">
            {/* Child no longer has its own scroll; it simply holds the content */}
            <div className="w-full max-w-3xl p-6 rounded-lg">
            <MarkdownRenderer content={formattedContent} className={"flex-grow p-4 text-white rounded-lg prose prose-invert max-w-none"} />
            </div>
        </div>
    );
};

export default DownloadPage;