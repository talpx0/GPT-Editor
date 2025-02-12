
// Function to reformat LaTeX delimiters in the markdown
export const formatMathExpressions = (markdownText) => {
  // Convert block math expressions: \[ ... \] → $$ ... $$
  markdownText = markdownText.replace(/\\\[\s*([\s\S]*?)\s*\\\]/g, (_, expr) => `\n$$\n${expr.trim()}\n$$\n`);

  // Convert inline math expressions: \( ... \) → $ ... $
  markdownText = markdownText.replace(/\\\(\s*(.*?)\s*\\\)/g, (_, expr) => `$${expr.trim()}$`);

  return markdownText;
};
