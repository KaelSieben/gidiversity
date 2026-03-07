# 🚀 Landing Page - Setup e Documentação

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## ⚙️ Configuração Inicial

#### 1.  Instalação de Dependências
Abra o terminal e execute o comando de instalação do Vite e do TailwindCSS. 

**Comando:**

    npm install -D vite tailwindcss postcss autoprefixer

#### 2. Geração dos Arquivos de Configuração
Inicie a configuração do Tailwind para gerar automaticamente os arquivos necessários na raiz do projeto.

**Comando:**


     npx tailwindcss init -p

Isso criará os arquivos ***tailwind.config.js*** e ***postcss.config.js***.

## 📂 Estrutura de Pastas
O projeto utiliza a estrutura padrão do Vite para otimização de build:

 - **/public:** Assets estáticos que não requerem processamento (ex: favicon.ico, robots.txt).
 - **/src:** Código-fonte da aplicação. Contém a lógica em TypeScript, componentes e estilização base.
