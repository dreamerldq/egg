const Controller = require('egg').Controller;
const nodemailer  = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const function sentEmail(params) {
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(smtpTransport({
        host: 'smtp.163.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'muse611@163.com', // generated ethereal user
            pass: 'muse0106' // generated ethereal password
        }
    }));

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'muse611@163.com', // sender address
        to: '845790692@qq.com', // list of receivers
        subject: '测试222222信件', // Subject line
        text: '11111?', // plain text body
        // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("发送错误",error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
}
class HomeController extends Controller {
  async index() {
    // sentEmail()
    this.ctx.body = 'Hello world';
  }
}

module.exports = HomeController;