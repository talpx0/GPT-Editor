
// Function to reformat LaTeX delimiters in the markdown
export const formatMathExpressions =(markdownText)=> {
    // Convert block math expressions: \[ ... \] → $$ ... $$
    markdownText = markdownText.replace(/\\\[(.*?)\\\]/gs, (_, expr) => `$$\n${expr}\n$$`);
  
    // Convert inline math expressions: \( ... \) → $ ... $
    markdownText = markdownText.replace(/\\\((.*?)\\\)/g, (_, expr) => `$${expr}$`);
  
    return markdownText;
  }
  