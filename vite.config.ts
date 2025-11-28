import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre', ...mdx({
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings]
      })
    },
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
