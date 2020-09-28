import * as path from 'path';

export const assets = {
  publicPath: '/public',
  devServer: {
    port: 8000,
    command: 'npm run client-start',
    debug: true,
    env: {
      APP_ROOT: path.join(__dirname, '../../../client'),
      BROWSER: 'none',
      SOCKET_SERVER: 'http://127.0.0.1:8000',
    }
  }
};

export const development = {
  watchDirs: [
    'app',
    'config',
    'app.ts',
    'agent.ts',
    'interface.ts',
  ],
  overrideDefault: true,
};
