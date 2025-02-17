import esbuild from 'esbuild';

let missingBindingsPlugin = {
  name: 'MissingBindings',
  setup(build) {
    build.onResolve({ filter: /\.node$/ }, (args) => ({
      path: args.path,
      namespace: 'missing-bindings',
      external: true
    }));
  }
};

esbuild.build({
  platform: 'node',
  entryPoints: ['./src/index.ts'],
  outfile: './lib/index.js',
  format: 'cjs',
  target: 'node12',
  bundle: true,
  tsconfig: './tsconfig.cjs.json',
  plugins: [missingBindingsPlugin]
});
