module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ["vue"],
  rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [0, { "packageDir ": "./src/" }],
    "max-len": [
      "error",
      {
        code: 160,
        ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
        ignoreUrls: true,
      },
    ],
    "vue/multi-word-component-names": "off",
    quotes: [0, "double"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", "svg"],
        moduleDirectory: ["node_modules", "src/"],
      },
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", "svg"],
        map: [["@", "./src"]],
      },
    },
  },
};