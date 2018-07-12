//app.js, 启动自动创建你的对象
module.exports = app => {
    // 应用会等待这个函数执行完成才启动
    app.beforeStart(async () => {
        //自动创建对应的model
        await app.model.sync({
            force: false
        });
    });
}