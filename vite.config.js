import reactPlugin from '@vitejs/plugin-react'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [reactPlugin()],
  server: {
    host: '0.0.0.0',
  },
}

export default config
