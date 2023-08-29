/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  semi: true,
  plugins: ['prettier-plugin-tailwindcss']
};

module.exports = config;
