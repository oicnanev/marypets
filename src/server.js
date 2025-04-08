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

// Adicione este middleware antes das rotas
app.use(express.json());

// Atualize a rota /contact
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'marypetsphotography@gmail.com',
        subject: 'Novo contato do site Marypets',
        html: `
            <h2>Novo contato recebido</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
            return res.status(500).json({ error: 'Erro ao enviar mensagem' });
        }
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
