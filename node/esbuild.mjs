/** ESBuild Configuration */

import { build } from 'esbuild';

const build_options = {
  entryPoints: ['src/main.js'],
  platform: 'node',
  target: 'node20',
  bundle: true,
  minify: true,
  format: 'cjs',
  outdir: 'dist'
};

await build(build_options);
