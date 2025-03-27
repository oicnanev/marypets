require('dotenv').config(); // Carrega as variáveis de ambiente
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Email do remetente
        pass: process.env.EMAIL_PASS, // Senha do remetente
    },
});

// rhpp unyj vvyh wrca

// Rota para processar o formulário de contactos
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Configuração do email
    const mailOptions = {
        from: process.env.EMAIL_USER, // Email do remetente
        to: 'marypets@gmail.com', // Email do destinatário
        subject: 'Marypets website', // Assunto do email
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`, // Corpo do email
    };

    // Envia o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
            res.status(500).send('Erro ao enviar a mensagem.');
        } else {
            console.log('Email enviado:', info.response);
            res.status(200).send('Mensagem enviada com sucesso!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
