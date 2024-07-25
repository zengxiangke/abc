module.exports = {
  presets: [
    // preset-env
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
      },
    ],

    // preset-react
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],

    // preset-typescript
    '@babel/preset-typescript',
  ],
}
