module.exports = {
  arrowParens: "avoid",
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  plugins: [require.resolve("prettier-plugin-astro"), require.resolve("prettier-plugin-tailwindcss")],
};
