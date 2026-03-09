import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

function serveMemex() {
  return {
    name: 'serve-memex',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/Memex' || req.url === '/Memex/') {
          const filePath = path.resolve('public/Memex/index.html')
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html')
            res.end(fs.readFileSync(filePath, 'utf-8'))
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [serveMemex(), react(), tailwindcss()],
})
