const DEV = process.env.NODE_ENV !== 'production'
export default {
  rules: [
    {
      test: /\.(js|jsx)$/,
      type: 'javascript/auto',
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ],
              '@babel/preset-react',
              '@emotion/babel-preset-css-prop'
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import', 'emotion']
          }
        }
      ],
      exclude: /node_modules/
    },
    {
      exclude: [/\.(js|css|mjs|html|json)$/],
      test: /\.(png|jpg|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: DEV ? 'assets/[name].[ext]' : 'assets/[name].[hash:8].[ext]'
          }
        }
      ]
    }
  ]
}
