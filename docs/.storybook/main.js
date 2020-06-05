module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      // Config for tsx files
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              // use @babel/preset-react for JSX and env (instead of staged presets)
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-typescript'),
            ],
            plugins: [
              // use @babel/plugin-proposal-class-properties for class arrow functions
              require.resolve('@babel/plugin-proposal-class-properties'),
            ],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            propFilter: (prop) => {
              if (prop.parent == null) {
                return true
              }
              // Filter out props inherited from extending interface with React.HTMLProps< - element - >
              return (
                prop.parent.fileName.indexOf('node_modules/@types/react') < 0
              )
            },
          },
        },
      ],
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
