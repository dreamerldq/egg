
const Controller = require('egg').Controller;
class NewUserController extends Controller{
    async index() {
        console.log("返回所有的用户数据")
        // const users = await this.ctx.model.User.findAll();
        // this.ctx.body = users;
        this.ctx.body = '这是新用户的首页'
    }
    async show() {
        const user = await this.ctx.model.User.findByLogin(this.ctx.params.login)
        await user.logSignin();
        this.ctx.body = user;
    }
 }
//   class NewsController extends Controller {
//     async list() {
//       const ctx = this.ctx;
//       const newsList = await ctx.service.news.list();
//       await ctx.render('news/list.tpl', { list: newsList });
//       await ctx.service.news.add();
//     }
//   }
  
  module.exports = NewUserController;