import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { codecovSvelteKitPlugin } from '@codecov/sveltekit-plugin';

export default defineConfig({
  plugins: [
    sveltekit({
      compilerOptions: {
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
      },
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: '404.html',
        precompress: false,
        strict: true,
      }),
    }),
    codecovSvelteKitPlugin({
      enableBundleAnalysis: true,
      bundleName: 'resume',
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    cssMinify: true,
  },
});
