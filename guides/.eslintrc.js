module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['standard', 'standard-jsx', 'standard-react', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'no-var': 'error',
    'prettier/prettier': 'error'
  }
}
