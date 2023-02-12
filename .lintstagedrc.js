module.exports = {
  '*.{js,ts,tsx}': ['eslint', 'prettier --write', 'vitest related --run'],
  '*.{css,scss}': ['prettier --write', 'git add'],
}
