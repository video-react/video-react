import { build } from 'esbuild';

await build({
  entryPoints: { 'videojs-demo': 'src/index.jsx' },
  outdir: 'dist',
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'info'
});
