


var nodemailer = require('nodemailer');


const { informative_mail } = require('./emailTempletes.js');
const send_mail_to_user = async (to, subject, content) => {


    var appData = await informative_mail(subject, content);


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:" xpertlab.itachi@gmail.com", 
            pass: "msqghqjagyokzywa"
        }
    });
  

    var mailOptions = {
        from: 'xpertlab.itachi@gmail.com',
        to: to,
        subject: subject,
        html: `${appData}`,
    };




    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}



module.exports = {

    send_mail_to_user
}