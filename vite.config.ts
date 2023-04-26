/// <reference types="vitest" />

import { ConfigEnv, UserConfig, loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import'
// vite.config.ts
// import PkgConfig from 'vite-plugin-package-config'
import { join } from 'path'
import { writeFileSync } from 'fs'

const shouldAnalyze = process.env.ANALYZE || false

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  let baseUrl = ''
  console.log('baseUrl')
  console.log(baseUrl)
  return {
    base: `${baseUrl}/microAppPage/`,
    envDir: './env',
    plugins: [
      vue(),
      vueJsx(),
      WindiCSS(),
      legacy({}),
      createStyleImportPlugin({
        resolves: [AndDesignVueResolve()]
      }),
      (function () {
        let basePath = ''
        return {
          name: 'app1',
          apply: 'build',
          configResolved(config) {
            basePath = `${config.base}${config.build.assetsDir}/`
          },
          writeBundle(options, bundle) {
            for (const chunkName in bundle) {
              /* eslint-disable */
              if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
                const chunk = bundle[chunkName]
                if (chunk.fileName && chunk.fileName.endsWith('.js')) {
                  chunk.code = chunk.code.replace(/(from|import\()(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
                    return all.replace($3, new URL($3, basePath))
                  })
                  const fullPath = join(options.dir, chunk.fileName)
                  writeFileSync(fullPath, chunk.code)
                }
              }
            }
          }
        }
      })()
    ],
    server: {
      port: 3101,
      open: false,
      https: false,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          ws: false
        }
      }
    },
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@', replacement: resolve(__dirname, './src') }
      ]
    },
    test: {
      environment: 'jsdom'
    }
  }
}
