module.exports = {
    // 使用较大的打印宽度，因为 Prettier 的换行设置似乎是针对没有注释的 JavaScript.
    printWidth: 110,
    // 使用 .gitattributes 来管理换行
    endOfLine: 'auto',
    // 单引号代替双引号
    singleQuote: true,
    // 对于 ES5 而言, 尾逗号不能用于函数参数，因此使用它们只能用于数组
    trailingComma: 'none',
    // 行末分号
    semi: true,
    // JSX双引号
    jsxSingleQuote: false,
    // 对象字面量中括号之间的空格。
    bracketSpacing: true,
    // > 括号行尾是否需要换行。
    bracketSameLine: false,
    // 箭头函数括号
    arrowParens: 'avoid',
    // 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
    insertPragma: false,
    // 缩进
    tabWidth: 2,
    // 使用tab还是空格
    useTabs: false,
    // 空白敏感度
    htmlWhitespaceSensitivity: 'ignore',
    // 在 HTML、Vue 和 JSX 中每行强制执行单个属性
    singleAttributePerLine: false
}
