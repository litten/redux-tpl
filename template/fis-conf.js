/* global fis */

const CONFIG = {
  'domain': {
    'main': '//ke.qq.com',
    'js': '//7.url.cn/edu/{{ name }}',
    'css': '//8.url.cn/edu/{{ name }}',
    'img': '//9.url.cn/edu/{{ name }}'
  }
};

fis.set('project.files', ['/src/**']);
fis.set('project.ignore', ['/node_modules/**', '/dev/**', '/public/**']);
// 忽略一些不需编译的内容
fis.match('{/package.json,/README.md,/npm-debug.log}', {
  release: false
});
fis.match(/^\/(\/dev|\/public)\/.+$/, {
  release: false
});

// sass编译
fis.match('/src/**.{scss, sass}', {
  rExt: 'css',
  parser: fis.plugin('node-sass')
});
// css 自动前缀
fis.match('src/**.{css}', {
  postprocessor: fis.plugin('autoprefixer', {
    'browsers': ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 9', 'Chrome >= 25', 'Android >= 4.0'],
    'cascade': false
  })
});

// es6
fis.match('/src/**.{js,jsx}', {
  rExt: 'js',
  parser: fis.plugin('babel-5.x', {
    sourceMaps: true
  })
});

// html
fis.match('/src/pages/(*)/index.html', {
  release: '/$1.html'
});

// 组件
fis.match('/src/components/(*)/demo/index.html', {
  release: '/components/$1.html'
});

// 模块化
fis.hook('commonjs', {
  extList: ['.js', '.jsx'],
  paths: {
    // TODO dist环境换成react.min.js & 去掉process包 & 去掉开发环境相关代码
    'react': '/node_modules/react/dist/react.js',
    'react-dom': '/node_modules/react-dom/dist/react-dom.js'
  }
});
fis.unhook('components');
fis.hook('node_modules');
// 直接require node_modules下的模块
fis.match('/node_modules/**.js', {
  isMod: true,
  useSameNameRequire: true
});
// badjs-report fis-mod.js 不需要模块化，直接嵌入html
fis.match('/node_modules/{badjs-report,fis-mod.js,ie-console}**.js', {
  isMod: false,
});
fis.match('/src/**.{js,jsx}', {
  isMod: true
});
// 这几个文件不做模块化处理
fis.match(/assets\/(badjs|badjs-init|qqapi|mod).*\.jsx?/, {
  parser: null,
  isMod: false
});

// 打包
fis.match('::package', {
  postpackager: fis.plugin('loader')
});

// ************** 生产环境 **************
// 静态域名
fis.media('dist').match('!**.map', {
  domain: CONFIG.domain.main,
  deploy: [
    fis.plugin('local-deliver', {
      to: './public/cdn/{{ name }}'
    }),
    fis.plugin('local-deliver', {
      to: './public/webserver/{{ name }}'
    })
  ]
}).match('**.{js,jsx}', {
  domain: CONFIG.domain.js
}).match('**.{css,scss,sass}', {
  domain: CONFIG.domain.css
}).match('::image', {
  domain: CONFIG.domain.img
}).match('**.{ttf,eot,svg,woff}', {
  domain: CONFIG.domain.img
});

// 隐藏demo
fis.media('dist').match('**/demo/**.*', {
  release: false
});
// 压缩打包
fis.media('dist').match('*.{js,jsx}', {
  optimizer: fis.plugin('uglify-js'),
  useHash: true
}).match('*.{css,scss}', {
  optimizer: fis.plugin('clean-css'),
  useHash: true,
  useSprite: true
}).match('::package', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader', {
    allInOne: true,
  }),
});
