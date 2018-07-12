const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    // read config
    const { serverUrl } = this.config.news;

    // use build-in http client to GET hacker-news api
    const { data: idList } = await this.ctx.curl(serverUrl, {
      dataType: 'json',
    });

    // parallel GET detail
    return idList.result.data;
  }
  async add(){
    const result = await this.app.mysql.insert('news', {title: 'Hello World'});
    this.app.mysql.model
  }
}

module.exports = NewsService;