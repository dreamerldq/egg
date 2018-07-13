
const Controller = require('egg').Controller;
class SearchController extends Controller{
    async search() {
        this.ctx.body = `search: ${this.ctx.query.name}`;
    }
 }

  
  module.exports = SearchController;