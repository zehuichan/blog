import { defineConfig, loadEnv } from 'vite'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/plugin'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  const viteEnv = wrapperEnv(env)

  const { VITE_PUBLIC_PATH } = viteEnv

  const isBuild = command === 'build'

  return {
    base: VITE_PUBLIC_PATH,
    root: root,
    plugins: createVitePlugins(viteEnv, isBuild),
  }
})
