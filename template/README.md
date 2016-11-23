# CRM - 客户关系管理系统

## 开发

### 安装依赖

安装fis依赖到全局
```bash
npm install -g fis3 fis-parser-babel-5.x fis-parser-node-sass fis-postprocessor-autoprefixer fis3-hook-commonjs fis3-hook-node_modules fis3-postpackager-loader eslint 
```

安装项目依赖当前目录
```bash
npm install
```

运行fis server
```bash
fis3 server restart --root ./dev
```

npm run
```bash
npm run dev
npm run serve
```

访问地址：http://127.0.0.1:8080/

## 生产环境

构建
```bash
fis3 release dist -d ./dist
```

npm run
```bash
npm run dist
```

配置代理
```
regex:(?isx)ke\.qq\.com\/cgi-bin  -> [Ignore]
regex:(?isx)ke\.qq\.com\/login_proxy.html -> [Ignore]
//ke.qq.com/crm/  -> ROOT\dist
//7.url.cn/edu/  -> ROOT\dist
//8.url.cn/edu/  -> ROOT\dist
//9.url.cn/edu/  -> ROOT\dist
```
访问地址：ke.qq.com/crm/index.htm

## 实际项目使用
修改这几个文件:
- `/src/assets/bj-init.js` badjs上报id
- `/src/assets/images/favicon.ico` 换成自己业务的favicon

## /node_modules 用相关说明
` npm`的包支持直接`import`，例如
```javascript
    import React from 'react';
```

## polyfill
polyfill统一在 `/src/assets/polyfill.js`里维护
目前已有以下API的polyfill，可以直接使用这些API，新增请添加到下面列表中：
- Promise
- fetch
- Object.assign
