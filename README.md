# marypets

![logo1](assets/logo1.gif)

### 1. Estrutura do Projeto

Primeiro, criar a estrutura do projeto:

```
marypets/
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.html
│
├── src/
│   └── server.js
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

### 2. Configuração do Node.js

No arquivo `server.js`, configurar um servidor simples usando Express:

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
```

### 3. Instalação de Dependências

No terminal, naveguar até a pasta do projeto e executar:

```bash
npm init -y
npm install express
npm install tailwindcss postcss autoprefixer
```

### 4. Configuração do Tailwind CSS

Criar o arquivo `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Criar o arquivo `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. Configuração do Tailwind no CSS

No arquivo `public/css/styles.css`, importar o Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Adaptação do HTML

No arquivo `public/index.html`, usar classes do Tailwind. Por exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marypet's</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <script src="/js/marypets.js" defer></script>
</head>
<body class="flex flex-col min-h-screen bg-neutral-100">
    <!-- Header with Menu -->
    <div id="header" class="fixed top-0 left-0 w-full bg-neutral-800 bg-opacity-80 z-50 flex items-center justify-between px-6 py-1 shadow-md">
        <!-- Logo -->
        <div id="logo">
            <a href="#section1">
                <img src="/images/logo-static.png" alt="Marypets Logo" class="h-8 md:h-10">
            </a>
        </div>
        <!-- Hamburger Icon for Mobile -->
        <div id="hamburger" class="md:hidden cursor-pointer" onclick="toggleMenu()">
            <svg class="w-6 h-6 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </div>
        <!-- Menu for Desktop -->
        <div id="desktop-menu" class="hidden md:flex md:items-center md:space-x-6">
            <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <li><a href="#section1" class="text-orange-500 hover:text-orange-700 text-xl">Inicio</a></li>
                <li><a href="#section2" class="text-orange-500 hover:text-orange-700 text-xl">Sobre</a></li>
                <li><a href="#section3" class="text-orange-500 hover:text-orange-700 text-xl">Portfolio</a></li>
                <li><a href="#section4" class="text-orange-500 hover:text-orange-700 text-xl">Adote um amigo</a></li>
                <li><a href="#section5" class="text-orange-500 hover:text-orange-700 text-xl">Contactos</a></li>
            </ul>
        </div>
    </div>

    <!-- Mobile Menu (Hidden by Default) -->
    <div id="mobile-menu" class="md:hidden hidden fixed top-16 left-0 w-full bg-neutral-500 z-40 shadow-lg">
        <ul class="flex flex-col space-y-4 p-6">
            <li><a href="#section1" class="text-orange-500 hover:text-orange-700 text-xl font-semibold" onclick="toggleMenu()">Inicio</a></li>
            <li><a href="#section2" class="text-orange-500 hover:text-orange-700 text-xl font-semibold" onclick="toggleMenu()">Sobre</a></li>
            <li><a href="#section3" class="text-orange-500 hover:text-orange-700 text-xl font-semibold" onclick="toggleMenu()">Portfolio</a></li>
            <li><a href="#section4" class="text-orange-500 hover:text-orange-700 text-xl font-semibold" onclick="toggleMenu()">Adote um amigo</a></li>
            <li><a href="#section5" class="text-orange-500 hover:text-orange-700 text-xl font-semibold" onclick="toggleMenu()">Contactos</a></li>
        </ul>
    </div>

    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Section 1: Fullscreen Logo -->
        <section id="section1" class="h-screen flex items-center justify-center bg-black">
            <div class="w-full h-full flex items-center justify-center">
                <img src="/images/logo1.gif" alt="Marypets Logo" class="max-w-full max-h-full object-contain transform scale-600 md:scale-100">
            </div>
        </section>
        <!-- Restante conteúdo -->
    </main>
</body>
</html>
```

### 7. Executando o Projeto

No terminal, executar:

```bash
npm start
```

Isso iniciará o servidor Node.js, e temos acesso o site em `http://localhost:3000`.

### 8. Considerações Finais

- **JavaScript**: O JavaScript original do site pode ser mantido, mas podemos modularizá-lo e usar ferramentas como Webpack ou Parcel para bundling.
- **Imagens e Assets**: Certificar de que todas as imagens e assets estejam na pasta `public/images/` e que os caminhos no HTML estejam corretos.
- **Tailwind Customização**: É possível personalizar o Tailwind no ficheiro `tailwind.config.js` para adicionar cores, fontes, etc.

### 9. Deploy de testes - render.com

Para deploy de testes, usar o serviço [render](https://render.com). Certificar que o `package.json` tenha o script `start` configurado corretamente.

```json
"scripts": {
  "start": "node src/server.js"
}
```

Configurações no Render:

| Field | Value |
| ----- | ----- |
| Name | marypets | 
| Branch	| main | 
| Root Directory | ./src | 
| Build Command | npm install | 
| Start Command | npm start | 
| Publish Directory	| (Leave blank) | 

### 9. NodeMailer - Por configurar

Usar o Gmail com Nodemailer

- Ativar a autenticação de dois fatores (se ainda não tiver).
- Gerar uma senha de app:
- Aceder Google Account Security.
- Em "Senhas de app", clicar em "Selecionar app" e escolher "Outro (Nome personalizado)".
- Dar um nome à senha (por exemplo, "Nodemailer") e clicar em "Gerar".
- Usar essa senha no campo pass do Nodemailer.

Na máquina ou serviço em que ficar o website criar um ficheiro `.env`com os campos:

- EMAIL_USER
- EMAIL_PASS

### Conclusão

Com esses passos, temos um site funcional usando [Node.js](https://nodejs.org/en) para o backend e [Tailwind CSS](https://tailwindcss.com) para a estilização. No HTML usar classes Tailwind é trabalhoso, mas o resultado é um site moderno e responsivo.
