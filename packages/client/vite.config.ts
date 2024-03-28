import { defineConfig, InlineConfig, ServerOptions } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { join } from 'node:path'
import { buildSync } from 'esbuild'
import cspMiddleware from './src/cspMiddleware'
import type { Request, Response } from 'node-fetch'
dotenv.config()

type Middleware = (request: Request, response: Response, next: () => void) => void

interface CustomServerOptions extends ServerOptions {
  middleware?: Middleware[]
}

// https://vitejs.dev/config/
const config: InlineConfig = {
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      },
    },
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
    middleware: [cspMiddleware],
  } as CustomServerOptions,
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 3001,
  },
  plugins: [
    react(),
    {
      name: 'service-worker',
      apply: 'build',
      enforce: 'post',
      transformIndexHtml() {
        buildSync({
          minify: true,
          bundle: true,
          entryPoints: [join(process.cwd(), 'service-worker.js')],
          outfile: join(process.cwd(), 'dist', 'service-worker.js'),
        })
      },
    },
  ],
}
export default defineConfig(config)
