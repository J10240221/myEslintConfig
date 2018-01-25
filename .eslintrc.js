module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  plugins: ["compat", "react", "babel", "import", "jsx-a11y"],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  rules: {
    "generator-star-spacing": [0], //函数空格
    "consistent-return": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [1, { extensions: [".js"] }], // react文件只能是JX 不能是JSX 需要自已添加进来
    "global-require": [1], //要求 require() 出现在顶层模块作用域中
    "import/prefer-default-export": [0],
    "react/jsx-no-bind": [0], //当在 render() 里使用事件处理方法时, 提前在构造函数里把 this 绑定上去
    "react/prop-types": [0], //
    "no-multi-comp": [0], // 原则上每个文件只写一个组件, 多个无状态组件可以放在单个文件中
    "no-multi-spaces": [0],
    "react/jsx-max-props-per-line": [0],
    "react/jsx-tag-spacing": [0],
    "react/jsx-curly-spacing": [0],
    "react/jsx-first-prop-new-line": [0],
    "jsx-closing-bracket-location": [0],
    "react/prefer-stateless-function": [0],
    "object-curly-spacing": [0],
    "spaced-comment": [0],
    "no-else-return": [0],
    "no-restricted-syntax": [0],
    "import/no-extraneous-dependencies": [0],
    "no-use-before-define": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "no-nested-ternary": [0],
    "arrow-body-style": [0],
    "import/extensions": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "import/no-unresolved": [0],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore"
      }
    ],
    "object-curly-newline": [0],
    "function-paren-newline": [0],
    "no-restricted-globals": [0],
    "require-yield": [1],
    "compat/compat": "error"
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      classes: true,
      defaultParams: true
    }
  },
  settings: {
    polyfills: ["fetch", "promises"]
  },
  //ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true
}; /*or*/ /*eslint-enable*/

// 完整的配置层次结构，从最高优先级最低的优先级，如下:

// 老大：行内配置
/*eslint-disable*/
/*global*/
/*eslint*/
/*eslint-env*/

/*
老二：命令行选项：
--global
--rule
--env
-c、--config
老三：项目级配置：
与要检测的文件在同一目录下的 .eslintrc.* 或 package.json 文件
继续在父级目录寻找 .eslintrc 或 package.json文件，直到根目录（包括根目录）或直到发现一个有"root": true的配置。
如果不是（1）到（3）中的任何一种情况，退回到 ~/.eslintrc 中自定义的默认配置。
*/
