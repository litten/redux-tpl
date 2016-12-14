# {{ name }}

> {{ description }}

## 构建步骤 Build Setup

``` bash
# 安装全局依赖
npm install -g fis3 fis-parser-babel-5.x fis-parser-node-sass fis-postprocessor-autoprefixer fis3-hook-commonjs fis3-hook-node_modules fis3-postpackager-loader eslint

# 安装项目依赖
npm install

# 开发 - 生成dev文件夹
npm run dev

# 发布 - 生成public文件夹
npm run build