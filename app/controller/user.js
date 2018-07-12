const Controller = require('egg').Controller;
const createRule = {
    id: 'number',
    name: 'string',
    age: 'number',
    sex: 'string'
}
class UserController extends Controller {
    async list() {
        const ctx = this.ctx;
        const newsList = await ctx.service.news.list();
        await ctx.render('news/list.tpl', {
            list: newsList
        });
        await ctx.service.news.add();
    }
    //创建用户
    async create() {
        const ctx = this.ctx;
        // ctx.validate(createRule)
        // console.log("AAAAAAAA", this.ctx.request.body)
        const result =  await this.app.mysql.insert('user', this.ctx.request.body)
        ctx.body = result.name
        // ctx.redirect(`localhost://www.google.co.kr/search?q=${q}`);
    }
    //展示index
    async index(){
        // this.ctx.body = '这是用户的展示界面，默认GET请求， 一般用来展示所有的用户数据';
        await this.ctx.render('user/index.tpl');
    }
    //展示米一个用户的数据
    async show() {
        const { ctx } = this
        const id = ((this.ctx.request.path).split('/'))[2];
        console.log("path:", ctx.request.path)
        console.log("querystring:", ctx.request.querystring)
        console.log("query:", ctx.request.query)
        console.log("host:", ctx.request.host)
        // console.log("url:", ctx.request.URL)
        console.log("type:", ctx.request.type)
        console.log("header:", ctx.header)
        console.log("method:", ctx.method)

        const user = await this.app.mysql.get('user', {id: id})
        console.log("获取到的用户是",user)
        this.ctx.response.type = 'text/plain; charset=utf-8';
        this.ctx.body = user.name
    }
    // 更新用户数据 METHOD: UPDATE
    async update() {

    }
}


module.exports = UserController;