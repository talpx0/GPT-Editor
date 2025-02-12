import React, { useEffect, useState } from "react";
import MarkdownRenderer from "../tools/MarkdownRenderer";
import useMarkdownStore from "../store";
import { formatMathExpressions } from "../tools/formatter";
import { useLocation } from "react-router";

const Download = () => {
    const { markdown } = useMarkdownStore();
    const formattedContent = formatMathExpressions(markdown);
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
            <div className="w-full max-w-2xl p-6 rounded-lg">
                <MarkdownRenderer content={formattedContent} />
            </div>
        </div>
    );
};

export default Download;