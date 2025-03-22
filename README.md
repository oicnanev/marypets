# marypets


### 1. Estrutura do Projeto

Primeiro, crie a estrutura do projeto:

```
meu-site/
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

No arquivo `server.js`, você pode configurar um servidor simples usando Express:

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

No terminal, navegue até a pasta do projeto e execute:

```bash
npm init -y
npm install express
npm install tailwindcss postcss autoprefixer
```

### 4. Configuração do Tailwind CSS

Crie o arquivo `tailwind.config.js`:

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

Crie o arquivo `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. Configuração do Tailwind no CSS

No arquivo `public/css/styles.css`, importe o Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Adaptação do HTML

No arquivo `public/index.html`, substitua as classes CSS antigas pelas classes do Tailwind. Por exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StudioP - Pets Photography</title>
    <link href="/css/styles.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div id="header" class="bg-white h-20 flex items-center justify-between px-6">
        <div id="logo">
            <a href="#section1">
                <img src="/images/logo.png" alt="StudioP Logo" class="h-12">
            </a>
        </div>
        <div id="menu">
            <ul class="flex space-x-6">
                <li><a href="#section1" class="text-gray-600 hover:text-gray-900">Inicio</a></li>
                <li><a href="#section2" class="text-gray-600 hover:text-gray-900">Sobre</a></li>
                <li><a href="#section3" class="text-gray-600 hover:text-gray-900">Perguntas</a></li>
                <li><a href="#galeria" class="text-gray-600 hover:text-gray-900">Galeria</a></li>
                <li><a href="#section5" class="text-gray-600 hover:text-gray-900">Serviços</a></li>
                <li><a href="#section6" class="text-gray-600 hover:text-gray-900">Contactos</a></li>
            </ul>
        </div>
    </div>
    <!-- Restante do conteúdo -->
</body>
</html>
```

### 7. Executando o Projeto

No terminal, execute:

```bash
npm start
```

Isso iniciará o servidor Node.js, e você poderá acessar o site em `http://localhost:3000`.

### 8. Considerações Finais

- **JavaScript**: O JavaScript original do site pode ser mantido, mas você pode querer modularizá-lo e usar ferramentas como Webpack ou Parcel para bundling.
- **Imagens e Assets**: Certifique-se de que todas as imagens e assets estejam na pasta `public/images/` e que os caminhos no HTML estejam corretos.
- **Tailwind Customização**: Você pode personalizar o Tailwind no arquivo `tailwind.config.js` para adicionar cores, fontes, etc.

### 9. Deploy

Para deploy, você pode usar serviços como Heroku, Vercel, ou Netlify. Certifique-se de que o `package.json` tenha o script `start` configurado corretamente.

```json
"scripts": {
  "start": "node src/server.js"
}
```

### Conclusão

Com esses passos, você terá um site funcional usando Node.js para o backend e Tailwind CSS para a estilização. A adaptação do HTML para usar classes do Tailwind pode ser trabalhosa, mas o resultado será um site moderno e responsivo.
