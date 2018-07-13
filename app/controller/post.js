const Controller = require('egg').Controller;
const createRule = {
    id: 'number',
    name: 'string',
    age: 'number',
    sex: 'string'
}
class UserController extends Controller {
    //创建用户
    async create() {
        const ctx = this.ctx;
        console.log("创建的用户数据", this.ctx.request.body)
        // const result =  await this.app.mysql.insert('user', this.ctx.request.body)
        const result = await ctx.model.Post.create(ctx.request.body)
        ctx.body = result.title
        // ctx.redirect(`localhost://www.google.co.kr/search?q=${q}`);
    }
    //展示index
    async index(){
        // this.ctx.body = '这是用户的展示界面，默认GET请求， 一般用来展示所有的用户数据';
        await this.ctx.render('post/index.tpl');
    }
    //展示米一个用户的数据
    async show() {
        const { ctx } = this
        const id = ((this.ctx.request.path).split('/'))[2];
        // const user = await this.app.mysql.get('user', {id: id})
        const post = await ctx.model.Post.findById(id)
        if(post){
            ctx.body = post.get('title')
        }else{
            ctx.body = '没有找到用户'
        }      
    }
    // 更新用户数据 METHOD: UPDATE
    async update() {

    }
}


module.exports = UserController;        