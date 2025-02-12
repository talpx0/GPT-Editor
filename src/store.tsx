import { create } from 'zustand';

// Define the state type
interface MarkdownState {
  markdown: string;
  setMarkdown: (newMarkdown: string) => void;
}

// Create Zustand store with TypeScript types
const useMarkdownStore = create<MarkdownState>((set) => ({
  markdown: String.raw`\[
    PV = \frac{A}{1 + r} \times \frac{1 - (1 + r)^{-n}}{\frac{r}{1 + r}}
  \]`,
  setMarkdown: (newMarkdown) => set({ markdown: newMarkdown }),
}));

export default useMarkdownStore;
