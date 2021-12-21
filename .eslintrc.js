/* prettier-ignore */

/**
 * 无法生效的 问题在于， eslint 是全局 安装的，其他的依赖包 也是，结果 就是 找不到包
 * const absPass = "/usr/local/lib/node_modules";
 * 报错 ESLint: Failed to load config "airbnb" to extend from
 * 其实 就是 extends:[airbnb] 改成 下面的 绝对路径就行，
 * `${absPass/eslint-config-airbnb}`
 */

module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier/@typescript-eslint" // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    DingTalkPC: false,
    window: true,
    location: true,
    localStorage: true,
    $: true,
    _: true,
    __LOCAL__: true,
    util: true
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: [
    "compat",
    "react",
    "babel",
    "import",
    "jsx-a11y",
    "@typescript-eslint",
    "react-hooks"
  ],
  // plugins: ['compat', 'react', 'babel', 'import', 'jsx-a11y', 'react-hooks'],
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
    // mocha: true,
    // jest: true,
    // jasmine: true,
  },
  rules: {
    "generator-star-spacing": [0], //函数空格
    "consistent-return": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] }
    ], // react文件只能是JX 不能是JSX 需要自已添加进来
    "global-require": [1], //要求 require() 出现在顶层模块作用域中
    "import/prefer-default-export": [0],
    "react/jsx-no-bind": [0], //当在 render() 里使用事件处理方法时, 提前在构造函数里把 this 绑定上去
    "react/prop-types": [0], //
    "react/no-multi-comp": [0], // 原则上每个文件只写一个组件, 多个无状态组件可以放在单个文件中
    "react/jsx-fragments": [0], // React.Fragment 可以不使用 缩写 <></>
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
    "compat/compat": "error",
    quotes: [0, "double"], //引号的问题
    "linebreak-style": 0, //换行的问题
    "class-methods-use-this": 0, //方法里面this改为不必须
    "arrow-parens": [0], //箭头函数参数是否一定要括号
    "no-debugger": [0], //可以debugger
    //老的文件，这整个rules都记得整理下
    "no-undef": 2,
    "no-unused-vars": 2,
    "no-unreachable": 1,
    "no-use-before-define": 1,
    "no-extra-semi": 2,
    semi: 2,
    "no-const-assign": 2,
    "no-fallthrough": 0,
    "no-empty": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-redeclare": 0,
    "no-this-before-super": 1,

    "constructor-super": 1,
    curly: 0,
    eqeqeq: 0,
    "func-names": 0,
    "valid-typeof": 1,
    "space-before-function-paren": 0, //函数名前的空格不必须
    "no-underscore-dangle": 0, // 可以 _ 前缀
    indent: 0, // 不然prettier 有时候冲突
    "react/sort-comp": 0, // TODO:临时取消，后面加上18.6.6
    "prefer-destructuring": 0, // TODO:临时取消，后面加上18.6.6
    "react/jsx-indent": 0, // 由于他人的代码全面飘红，难受，反正我都是用代码格式化工具的
    "react/jsx-wrap-multilines": 0, // 同上
    "no-inner-declarations": 0,
    "no-tabs": 0, // 同上
    "max-len": 0, // 同上
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  },
  parserOptions: {
    ecmaVersion: 2018,
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
  //ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。所以可以再项目的根目录使用
  // root: true
};

/********** 完整的配置层次结构，从最高优先级最低的优先级，如下:**********/
// 老大：行内配置
// /*eslint-disable*/ or /*eslint-enable*/
// /*global*/
// /*eslint*/
// /*eslint-env*/

// 老二：命令行选项：
// --global
// --rule
// --env
// -c、--config

// 老三：项目级配置：
// 与要检测的文件在同一目录下的 .eslintrc.* 或 package.json 文件
// 继续在父级目录寻找 .eslintrc 或 package.json文件，直到根目录（包括根目录）或直到发现一个有"root": true的配置。
// 如果不是（1）到（3）中的任何一种情况，退回到 ~/.eslintrc 中自定义的默认配置。

/****************各类语法****************/
// 1行内的：
//   // eslint-disable-line                 取消此行的检查
//   // eslint-disable-next-line            取消下一行的检查
// 2整个文件的：(eslint 后面的那个 filed 就是页面上红色波浪线提示的filed)
//   /*eslint-disable*/
//   /*eslint camelcase: 0*/                取消驼峰限制
//   /*eslint no-unused-expressions: 0*/    取消表达式的错误
