import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
})