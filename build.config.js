
const isDev = process.env.NODE_ENV === "development"
const svgrPlugin = require('esbuild-plugin-svgr');

const esbuild = require('esbuild')
const {sassPlugin} = require('esbuild-sass-plugin')
const alias = require('esbuild-plugin-alias');

esbuild.build({
    entryPoints: ["./views/main.jsx"],
    bundle: true,
    minify: !isDev,
    sourcemap:  isDev,
    allowOverwrite: true,
    outdir: 'public/assets',
    // loader: { '.svg': 'file' },
    // chunkNames: "chunks/[name]",
    // chunkNames: "chunks/[name]-[hash]",
    target: ['chrome90'],
    format:"esm",
    watch: isDev ?  {
        onRebuild(error, result) {
            if (error) {
                console.error('client watch build failed:', error)
            } else {
                console.log('client watch build succeeded:', result)
            }
        },
    } : false,
    incremental: false,
    splitting: true,
    plugins: [
        sassPlugin(),
        svgrPlugin(),
        alias({
            'react': 'preact/compat',
        }),
    ]
})
    .then(r=>{
        console.log("client building...")
    })
    .catch(ex=>{
        process.exit(1)
        console.log(ex)
    })

