import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the state type
interface MarkdownState {
  markdown: string;
  setMarkdown: (newMarkdown: string) => void;
}

// Fix sessionStorage integration for Zustand persist middleware
const useMarkdownStore = create<MarkdownState>()(
  persist(
    (set) => ({
      markdown: String.raw`\[
        PV = \frac{A}{1 + r} \times \frac{1 - (1 + r)^{-n}}{\frac{r}{1 + r}}
      \]`,
      setMarkdown: (newMarkdown) => set({ markdown: newMarkdown }),
    }),
    {
      name: 'markdown-storage', // Storage key
      storage: {
        getItem: (key) => {
          const storedValue = sessionStorage.getItem(key);
          return storedValue ? JSON.parse(storedValue) : null;
        },
        setItem: (key, value) => {
          sessionStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: (key) => sessionStorage.removeItem(key),
      },
    }
  )
);

export default useMarkdownStore;
