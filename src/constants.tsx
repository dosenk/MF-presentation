export const REMOTE_APP_CODE = `

new ModuleFederationPlugin({
    name: 'remoteApp1',
    filename: 'remoteEntry.js',
    exposes: {
      './ElementList': './src/sections/element/list/ElementList',
      './ElementEditor': './src/sections/element/editor/ElementEditor',
    },
    shared: {
      react: {
        eager: true,
        singleton: true,
      },
      'react-dom': {
        eager: true,
        singleton: true,
      },
    }
})
\`\`\`
`;

export const HOST_APP_CODE = `
  \`\`\`typescript
  new ModuleFederationPlugin({
    name: 'rootApp',
    filename: 'remoteEntry.js',
    remotes: {
      remoteApp1: remoteApp1@http://localhost:3001/remoteEntry.js,
      remoteApp2: remoteApp2@http://localhost:3002/remoteEntry.js,
    },
    shared: {
      react: {
        eager: true,
        singleton: true,
      },
      'react-dom': {
        eager: true,
        singleton: true,
      },
    }
  })
  \`\`\`
`;

export const NEXT_MF_HOST = `
\`\`\`typescript
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next2',
        remotes: {
          next1: 'next1@http://localhost:3001/_next/static/\${isServer ? "ssr" : "chunks"}/remoteEntry.js',
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './title': './components/exposedTitle.js',
          './checkout': './pages/checkout',
        },
        shared: {
          // whatever else
        },
      }),
    );

    return config;
  },
};
\`\`\`
`;
