exports.keys = 'muse';
// 视图框架配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  exports.news = {
    pageSize: 5,
    serverUrl: 'http://v.juhe.cn/toutiao/index?type=top&key=037b7100876d652baddbc94ebb172bef',
  };


  //mysql配置
  // exports.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: 'localhost',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'root',
  //     // 密码
  //     password: 'muse0106',
  //     // 数据库名
  //     database: 'news',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };

  //sequelize配置

  exports.sequelize = {
    // 数据库类型
    dialect: "mysql",
    // host
    host: "localhost",
    // 端口号
    port: "3306",
    // 用户名
    username: "root",
    // 密码
    password: "muse0106",
    // 数据库名
    database: "test"
  };
  exports.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: '*'
  };
  
  exports.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };


exports.middleware = ['uppercase','gzip']
exports.gzip = {
  threshold: 1024,
}
  // module.exports = {
  //   // 配置需要的中间件，数组顺序即为中间件的加载顺序
  //   middleware: [ 'uppercase','gzip' ],
  
  //   // 配置 gzip 中间件的配置
  //   gzip: {
  //     threshold: 1024, // 小于 1k 的响应体不压缩
  //   },

  // };
  