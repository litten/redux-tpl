module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "项目名（name）"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "描述（description）",
      "default": "这个项目让我发家致富…"
    },
    "author": {
      "type": "string",
      "message": "作者（Author）"
    },
    "lint": {
      "type": "confirm",
      "message": "使用 ESLint ?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "选择一个 ESLint 版本",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "AirBNB (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "AirBNB"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "tdw": {
      "type": "string",
      "message": "tdw opername",
      "default": "Edu"
    },
    "isd": {
      "type": "string",
      "message": "isd id",
      "default": "10241024"
    },
    "badjs": {
      "type": "string",
      "message": "badjs id",
      "default": "10241024"
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "开始运行:\n\n  1、cd {{destDirName}}\n  2、npm install -g fis3 fis-parser-babel-5.x fis-parser-node-sass fis-postprocessor-autoprefixer fis3-hook-commonjs fis3-hook-node_modules fis3-postpackager-loader eslint  \n  2、npm install\n  3、npm run dev\n\n\n  祝你好运：）"
};
