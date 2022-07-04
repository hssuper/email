const nodemailer = require ('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '?',
        pass: '?',
    }

});

transport.sendMail({
    from: 'manual de email<?>',
    to: '?',
    subject: 'enviando email de teste de email com nodemailer',
    html:'<h1>Ola, Isso e um teste<h1><p>Node js e muito bom<p>',
    text: 'ola node js e muito bom'
})
.then(() => console.log('Email enviado com sucesso'))
.catch((err) => console.log('erro ao enviar email', err));