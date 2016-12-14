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
      "message": "作者（author）"
    },
    "index_page": {
      "type": "string",
      "message": "首页名称",
      "default": "index"
    },
    "tdw": {
      "type": "string",
      "message": "tdw opername",
      "default": "Edu"
    },
    "isd_flag1": {
      "type": "string",
      "message": "isd测速flag1",
      "default": "1613"
    },
    "isd_flag2": {
      "type": "string",
      "message": "isd测速flag2",
      "default": ""
    },
    "isd_flag3": {
      "type": "string",
      "message": "isd测速flag3",
      "default": ""
    },
    "badjs": {
      "type": "string",
      "message": "badjs id",
      "default": "10241024"
    },
    "lint": {
      "type": "confirm",
      "message": "使用 ESLint ?"
    },
    "unit": {
      "type": "confirm",
      "message": "使用 单元测试?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit",
    "test/**/*": "unit"
  },
  "completeMessage": "开始运行:\n\n  1、cd {{destDirName}}\n  2、npm install -g fis3 fis-parser-babel-5.x fis-parser-node-sass fis-postprocessor-autoprefixer fis3-hook-commonjs fis3-hook-node_modules fis3-postpackager-loader eslint  \n  3、npm install\n  4、npm run dev\n\n\n祝你好运：）"
  "autoScript": 'npm i'
};
