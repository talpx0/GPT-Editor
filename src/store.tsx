import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the state type
interface MarkdownState {
  markdownText: string;
  formattedMdText: string;
  setMarkdown: (newMarkdown: string|null, formattedMdText: string| null) => void;
}

// Fix sessionStorage integration for Zustand persist middleware
const useMarkdownStore = create<MarkdownState>()(
  persist(
    (set) => ({
      markdownText: String.raw`\[
        PV = \frac{A}{1 + r} \times \frac{1 - (1 + r)^{-n}}{\frac{r}{1 + r}}
      \]`,
      formattedMdText: String.raw`$$
      \[
        PV = \frac{A}{1 + r} \times \frac{1 - (1 + r)^{-n}}{\frac{r}{1 + r}}
      \]
      $$`,
      setMarkdown: (newMarkdown, formattedMdText) => set((state)=>({ markdownText: newMarkdown ?? state.markdownText , formattedMdText: formattedMdText ?? state.formattedMdText })),
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
