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


### TODO: formatar melhor

Passo a passo para criar uma **VM sempre gratuita (e2-micro)** no Google Cloud e configurá-la para hospedar um site. Este tutorial cobre desde a criação da conta até a implantação de um site básico.

---

### **Passo 1: Criar uma Conta no Google Cloud (GCP)**
1. Acesse [Google Cloud Free Tier](https://cloud.google.com/free).
2. Clique em **"Get started for free"** e faça login com sua conta Google.
3. Insira os dados do cartão de crédito (⚠️ **não será cobrado** se usar apenas recursos gratuitos).
4. Ative o **período de trial** (US$ 300 em créditos por 90 dias, mas focaremos no *always free*).

---

### **Passo 2: Criar a VM (Compute Engine)**
1. Acesse o [Console do GCP](https://console.cloud.google.com/).
2. No menu lateral, vá para **Compute Engine** > **VM instances**.
3. Clique em **"Create Instance"** e configure:
   - **Nome**: `vm-site-free` (ou outro nome).
   - **Região**: `us-west1` (Oregon) ou `us-central1` (Iowa) — [regiões sempre gratuitas](https://cloud.google.com/free/docs/always-free#compute).
   - **Máquina**: `e2-micro` (1 vCPU, 1GB RAM).
   - **Disco boot**: 30GB (Standard Persistent Disk, gratuito).
   - **Sistema operacional**: Ubuntu 22.04 LTS (ou Debian).
   - **Firewall**: Marque **"Allow HTTP traffic"** e **"Allow HTTPS traffic"**.

   ![Imagem da configuração da VM](https://i.imgur.com/XYZ1234.png)

4. Clique em **"Create"**.

---

### **Passo 3: Conectar à VM via SSH**
1. Na lista de VMs, clique em **"SSH"** ao lado da sua instância (o GCP abrirá um terminal no navegador).
2. Ou use o comando local:
   ```bash
   gcloud compute ssh --zone us-west1-a vm-site-free
   ```
   (Instale o [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) se necessário.)

---

### **Passo 4: Instalar um Servidor Web (Nginx/Apache)**
No terminal da VM, execute:
#### **Para Nginx (recomendado para sites estáticos)**:
```bash
sudo apt update && sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```
- Teste: Acesse `http://<IP-DA-VM>` no navegador. Você deve ver a página padrão do Nginx.

#### **Para Apache (se preferir)**:
```bash
sudo apt install apache2 -y
sudo systemctl start apache2
```

---

### **Passo 5: Configurar Domínio e Firewall (Opcional)**
1. **IP Externo**:  
   - Na console do GCP, vá para **VPC network** > **External IP addresses**.  
   - Altere o IP da VM de "Ephemeral" para **"Static"** (gratuito enquanto a VM existir).  

2. **Domínio**:  
   - Compre um domínio (ex: no [Cloudflare](https://www.cloudflare.com/pt-br/products/registrar/)) e aponte-o para o IP estático.  

3. **Firewall**:  
   - Libere a porta 80 (HTTP) e 443 (HTTPS) em **VPC network** > **Firewall rules**.  

---

### **Passo 6: Implantar Seu Site**
#### **Para um site estático (HTML/CSS/JS)**:
1. Suba seus arquivos via SFTP ou Git:
   ```bash
   sudo rm -rf /var/www/html/*
   sudo cp -r ~/seus-arquivos/* /var/www/html/
   ```

#### **Para um site dinâmico (Node.js/PHP)**:
- **Node.js**: Use `pm2` para gerenciar o processo:
  ```bash
  sudo apt install nodejs npm
  npm install -g pm2
  pm2 start app.js
  pm2 startup
  ```
- **PHP + MySQL**: Instale o LAMP:
  ```bash
  sudo apt install php mysql-server php-mysql
  ```

---

### **Passo 7: Monitorar Custos (Evitar Cobranças)**
1. Acesse [Billing](https://console.cloud.google.com/billing) no GCP.
2. Ative **alertas de orçamento** para receber notificações se ultrapassar os limites gratuitos.
3. **Always Free**:  
   - Mantenha a VM em `us-west1` ou `us-central1`.  
   - Não ultrapasse 1GB de saída de rede/dia.  

---

### **Alternativa para Sites Estáticos: Firebase Hosting (Gratuito)**
Se seu site for estático (HTML, React, Vue), use o **Firebase Hosting** (mais simples e com CDN):
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```
- **Recursos**: 10GB de armazenamento e 1GB/dia de tráfego gratuitos.

---

### **Dicas para Otimizar Recursos**
- **Reduza o uso de CPU/RAM**: Otimize seu site para evitar esgotar os 1GB de RAM.  
- **Use Cloud CDN**: Se o tráfego aumentar, ative o Cloud CDN (custo adicional).  


Para associar o seu domínio ao IP público da sua VM (**34.133.75.90**), siga estes passos:

---

### **Passo 1: Configure um DNS (A ou CNAME)**
Você precisa apontar o domínio para o IP da VM via **registro DNS**. O método depende de onde seu domínio está registrado (ex: Cloudflare, GoDaddy, Google Domains).  

#### **Opção 1: Registro A (recomendado para IPs estáticos)**
- Acesse o painel do seu **registrador de domínio** (ex: Cloudflare, Namecheap).  
- Adicione um registro **A** com:  
  - **Host**: `@` (para o domínio raiz, ex: `seudominio.com`) ou `www` (para `www.seudominio.com`).  
  - **Value/IP**: `34.133.75.90` (IP da sua VM).  
  - **TTL**: `3600` (padrão).  

#### **Opção 2: Registro CNAME (se usar um subdomínio)**
- Para subdomínios (ex: `app.seudominio.com`), crie um **CNAME** apontando para:  
  - **Host**: `app`  
  - **Value**: `seudominio.com` (ou outro domínio já configurado).  

---

### **Passo 2: Verifique se o IP é estático**
No Google Cloud:  
1. Acesse **VPC network** > **External IP addresses**.  
2. Se o IP `34.133.75.90` estiver como **"Ephemeral"**, mude para **"Static"** (gratuito enquanto a VM existir).  
   - Isso evita que o IP mude após reiniciar a VM.  

---

### **Passo 3: Configure o servidor web (Nginx/Apache)**
Na sua VM, garanta que o servidor está respondendo no IP:  
```bash
sudo apt update && sudo apt install nginx -y  # Se usar Nginx
sudo systemctl start nginx
```
- Teste: Acesse `http://34.133.75.90` no navegador. Deve aparecer a página padrão do Nginx.  

---

### **Passo 4: Adicione o domínio ao servidor web**
Edite o arquivo de configuração do Nginx (ex: `/etc/nginx/sites-available/default`):  
```bash
sudo nano /etc/nginx/sites-available/default
```
Substitua ou adicione:  
```nginx
server {
    listen 80;
    server_name seudominio.com www.seudominio.com;
    root /var/www/html;
    index index.html;
}
```
Reinicie o Nginx:  
```bash
sudo systemctl restart nginx
```

---

### **Passo 5: Habilite HTTPS (SSL/TLS) - Opcional**
Use o **Certbot** para obter um certificado gratuito do Let's Encrypt:  
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d seudominio.com -d www.seudominio.com
```
Siga as instruções para validar o domínio.  

---

### **Passo 6: Espere a propagação do DNS**
- As alterações DNS podem levar **até 48 horas** para propagar globalmente.  
- Verifique com:  
  ```bash
  ping seudominio.com  # Deve retornar 34.133.75.90
  ```
  Ou use ferramentas como [DNS Checker](https://dnschecker.org/).  

---

### **Passo 7: Configure o Firewall (se necessário)**
No Google Cloud:  
1. Acesse **VPC network** > **Firewall rules**.  
2. Crie uma regra para permitir tráfego **HTTP (80)** e **HTTPS (443)**.  

---

### **Resolução de Problemas Comuns**  
- **Erro "Site not reachable"**:  
  - Verifique se o Nginx/Apache está rodando (`sudo systemctl status nginx`).  
  - Confira se o firewall do GCP permite as portas 80/443.  
- **DNS não propagou**: Use `dig seudominio.com` para ver o IP atual.  

---

Ótima observação! Sim, é **mais organizado e seguro** criar um arquivo dedicado para o domínio (`marypets.pt`) no Nginx, redirecionar HTTP (80) → HTTPS (443) e depois encaminhar para a sua aplicação Node.js na porta 3000. Siga este passo a passo:

---

### **Passo 1: Crie um arquivo de configuração dedicado no Nginx**
1. Acesse a VM via SSH e crie um novo arquivo para o domínio:
   ```bash
   sudo nano /etc/nginx/sites-available/marypets.pt
   ```

2. Cole o seguinte conteúdo (ajuste conforme necessário):
   ```nginx
   # Redirecionar HTTP (80) → HTTPS (443)
   server {
       listen 80;
       server_name marypets.pt www.marypets.pt;
       return 301 https://$host$request_uri;
   }

   # Configuração HTTPS (443) → Proxy para Node.js (3000)
   server {
       listen 443 ssl;
       server_name marypets.pt www.marypets.pt;

       # Certificado SSL (gerado pelo Certbot)
       ssl_certificate /etc/letsencrypt/live/marypets.pt/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/marypets.pt/privkey.pem;

       # Configurações de segurança SSL
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       # Proxy reverso para a aplicação Node.js (porta 3000)
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

### **Passo 2: Habilite o arquivo de configuração**
1. Crie um link simbólico para ativar o site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/marypets.pt /etc/nginx/sites-enabled/
   ```

2. Remova o arquivo `default` (se existir) para evitar conflitos:
   ```bash
   sudo rm /etc/nginx/sites-enabled/default
   ```

3. Teste a configuração do Nginx:
   ```bash
   sudo nginx -t
   ```
   - Se aparecer `syntax is ok`, reinicie o Nginx:
     ```bash
     sudo systemctl restart nginx
     ```

---

### **Passo 3: Obtenha o certificado SSL (HTTPS)**
Execute o Certbot para gerar certificados gratuitos (Let's Encrypt):
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d marypets.pt -d www.marypets.pt
```
- Siga as instruções interativas para validar o domínio.  
- O Certbot **automaticamente atualizará** o arquivo `marypets.pt` com as configurações SSL.

---

### **Passo 4: Configure a aplicação Node.js**
1. Garanta que sua aplicação está rodando na **porta 3000** (localmente na VM).  
   - Use `pm2` para gerenciar o processo:
     ```bash
     sudo npm install -g pm2
     pm2 start app.js --name "marypets-app"
     pm2 startup
     pm2 save
     ```

2. Verifique se a aplicação responde localmente:
   ```bash
   curl http://localhost:3000
   ```

---

### **Passo 5: Ajuste o firewall (Google Cloud)**
1. Acesse o [Console do GCP](https://console.cloud.google.com/) > **VPC network** > **Firewall rules**.  
2. Crie regras para permitir tráfego nas portas:
   - **80/tcp** (HTTP)  
   - **443/tcp** (HTTPS)  

---

### **Passo 6: Verifique a propagação do DNS**
Use ferramentas como:
```bash
dig marypets.pt +short  # Deve retornar 34.133.75.90
```
Ou acesse:
- [DNS Checker](https://dnschecker.org/)  
- [SSL Labs Test](https://www.ssllabs.com/ssltest/) (para validar HTTPS).  

---

### **Resolução de Problemas Comuns**
- **Erro 502 Bad Gateway**:  
  - Verifique se a aplicação Node.js está rodando (`pm2 list`).  
  - Confira os logs do Nginx:
    ```bash
    sudo tail -f /var/log/nginx/error.log
    ```

- **HTTPS não funciona**:  
  - Renove o certificado SSL:
    ```bash
    sudo certbot renew --dry-run
    ```

---

### **Resumo Final**
1. **Arquivo dedicado no Nginx**: Melhor organização e segurança.  
2. **HTTP → HTTPS**: Redirecionamento automático.  
3. **Proxy para Node.js**: Encaminha tráfego para a porta 3000.  
4. **SSL com Certbot**: HTTPS gratuito e automático.  

Para verificar se o Node.js está a correr na porta **3000** e garantir que ele continue em execução mesmo após desligar a sessão SSH, siga estes passos:

---

### **1. Verificar se o Node.js está a correr na porta 3000**
Execute no terminal da sua VM:
```bash
sudo lsof -i :3000
```
ou
```bash
netstat -tulnp | grep 3000
```
- **Se estiver em execução**, você verá uma saída como:
  ```
  COMMAND  PID USER   FD TYPE DEVICE SIZE/OFF NODE NAME
  node    1234 user   20u IPv4 12345      0t0  TCP *:3000 (LISTEN)
  ```
- **Se não houver saída**, o Node.js não está ativo na porta 3000.

---

### **2. Como executar o Node.js em background (sem depender da sessão SSH)**
Usar `npm start &` não é suficiente, pois o processo será terminado quando você sair do SSH. Utilize uma destas opções:

#### **Opção 1: Usar `nohup` (simples, mas sem gestão avançada)**
```bash
nohup npm start > /dev/null 2>&1 &
```
- `nohup` mantém o processo ativo após logout.
- `> /dev/null 2>&1` redireciona logs para evitar arquivos `nohup.out`.

#### **Opção 2: Usar `pm2` (recomendado para produção)**
Instale o [PM2](https://pm2.keymetrics.io/) (gerenciador de processos para Node.js):
```bash
sudo npm install -g pm2
```
Inicie a aplicação:
```bash
pm2 start npm --name "marypets-app" -- start
```
- **Comandos úteis do PM2**:
  ```bash
  pm2 list              # Lista processos ativos
  pm2 logs marypets-app # Mostra logs em tempo real
  pm2 save              # Salva os processos para reiniciar após reboot
  pm2 startup           # Configura para iniciar automaticamente com o sistema
  ```

---

### **3. Verificar se a aplicação está acessível**
Teste localmente na VM:
```bash
curl http://localhost:3000
```
- Se retornar o conteúdo esperado (ex: HTML, JSON), está tudo OK.

---

### **4. Se o Node.js não estiver a responder**
#### **Possíveis causas**:
- **A aplicação crashou**: Verifique os logs:
  ```bash
  pm2 logs marypets-app  # Se usou PM2
  cat nohup.out          # Se usou nohup
  ```
- **Porta bloqueada**: Verifique o firewall da VM ou do Google Cloud:
  ```bash
  sudo ufw status  # Se estiver usando UFW (Linux)
  ```
  No Google Cloud, acesse **VPC Network** > **Firewall Rules** e garanta que a porta 3000 está aberta para tráfego interno (se usada apenas pelo proxy do Nginx).

---

### **5. Configurar o Nginx para redirecionar para a porta 3000**
Se ainda não fez, edite o arquivo do Nginx (`/etc/nginx/sites-available/marypets.pt`) para incluir:
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```
Reinicie o Nginx após alterações:
```bash
sudo systemctl restart nginx
```

---

### **Resumo dos Comandos**
| Tarefa                          | Comando                              |
|---------------------------------|--------------------------------------|
| Verificar porta 3000            | `sudo lsof -i :3000`                 |
| Iniciar com PM2                 | `pm2 start npm --name "my-app" -- start` |
| Verificar processos PM2         | `pm2 list`                           |
| Iniciar com nohup               | `nohup npm start > /dev/null 2>&1 &` |
| Testar acesso local             | `curl http://localhost:3000`         |

---

### **Importante**
- **PM2 é a melhor opção** para produção (monitoramento, reinício automático, logs organizados).  
- Se a aplicação crasha frequentemente, verifique erros no código (ex: `try/catch` faltando).  


### Conclusão

Com esses passos, temos um site funcional usando [Node.js](https://nodejs.org/en) para o backend e [Tailwind CSS](https://tailwindcss.com) para a estilização. No HTML usar classes Tailwind é trabalhoso, mas o resultado é um site moderno e responsivo.
