module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  overrides: [
    {
      files: 'src/**/*.tsx',
      options: {
        requirePragma: false,
      },
    },
    {
      files: '**/**/*.ts',
      options: {
        requirePragma: true,
        trailingComma: 'es5',
      },
    },
  ],
};
