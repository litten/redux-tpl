module.exports = {
  // 站点相关，项目名
  name: 'ke.qq.com.crm',
  //ARS发布相关配置
  ars: {
    //以支持自定义拆单发布
    //外层数组元素表示 ars单
    //内层数组元素表示 发布文件所在文件夹 【必须为 构建输出约定的子目录】
    splitReceipt: [['webserver', 'cdn']]

    //customInfo: true  //提交ars发布是否需要填写版本号，如果需要会有输入框输入 发布版本
  },
  distConfig: {
    environmentVariables: {
      'development': 'development',
      'production': 'production'
    },
    buildCommand: {
      'development': {
        command: 'npm',
        args: []
      },
      'production': {
        command: 'npm',
        args: []
      }
    }
  }
};
