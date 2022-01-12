import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const resolve = (...relativePath) => path.resolve(__dirname, ...relativePath);

export default {
    input: {
        lazy: resolve('src/index.ts')
    },
    output: [{
        name: 'lazy',
        dir: 'lib',
        exports: 'auto',
        entryFileNames: '[name].cjs.js',
        format: 'cjs'
    }],
    plugins: [
        globals(),
        builtins(),
        json(),
        commonjs(),
        nodeResolve({
            preferBuiltins: false
        }),
        typescript()
    ]
};
