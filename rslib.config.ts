import { defineConfig } from '@rslib/core';

const shared = {
  dts: {
    bundle: false,
  },
};

export default defineConfig({
  lib: [
    {
      ...shared,
      format: 'esm',
      syntax: 'es5',
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
      autoExternal: true,
    },
    {
      ...shared,
      format: 'cjs',
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
      autoExternal: true,
    },
  ],
  output: {
    target: 'node',
  },
});
