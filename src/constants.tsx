export const REMOTE_APP_CODE = `
\`\`\`typescript
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
