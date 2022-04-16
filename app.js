const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
app.use(serve('./static'))
app.use(async ctx => {
    ctx.body = `console.log('i am qwe')`
});
app.listen(3000)