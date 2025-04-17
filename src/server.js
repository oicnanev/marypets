const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
require('dotenv').config({ path: path.join(__dirname, '../.env') });


// Configuração Elastic Email
const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  port: 2525,
  secure: false,
  auth: {
    user: process.env.ELASTIC_EMAIL_USER,
    pass: process.env.ELASTIC_EMAIL_API_KEY
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verificação da conexão SMTP
transporter.verify((error) => {
  if (error) {
    console.error('Erro na conexão SMTP:', error);
  } else {
    console.log('Conexão SMTP configurada com sucesso');
  }
});

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const mailOptions = {
    from: '"MaryPets" <website@marypets.pt>', // Formato recomendado
    to: 'maypets.website@gmail.com',
    subject: `Novo contato - ${req.body.name}`,
    html: `
      <h3>Contato do Site</h3>
      <p><strong>De:</strong> ${req.body.name} (${req.body.email})</p>
      <p>${req.body.message}</p>
    `,
    text: `Mensagem de ${req.body.name} (${req.body.email}): ${req.body.message}` // Versão texto
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', {
      error: error.message,
      stack: error.stack,
      response: error.response
    });
    res.status(500).json({ 
      error: 'Falha ao enviar mensagem',
      details: error.response || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
