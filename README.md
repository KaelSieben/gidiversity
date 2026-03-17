# 🚀 Landing Page - Setup e Documentação

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Gerenciador de Pacotes (npm)
Verificar se já está instalado:

    npm -v


## 📥 Clonando o Repositório
 **Abra o terminal e execute:**

    git clone https://github.com/KaelSieben/gidiversity.git

  **Acesse o diretório do projeto:**

    cd gidiversity

## 📦 Instalando Dependências
**Abra o terminal e execute:**

    npm install

## ⚡ Rodando o Projeto

**Ambiente de Desenvolvimento:**

    npm run dev

## 📂 Estrutura de Pastas
O projeto utiliza a estrutura padrão do Vite para otimização de build:

 - **/public:** Assets estáticos que não requerem processamento (ex: favicon.ico, robots.txt).
 - **/src:** Código-fonte da aplicação. Contém a lógica em TypeScript, componentes e estilização base.

## 🌳 Guia de Versionamento

### 🌿 1. Nossas Branches (Ramificações)

#### `Main`:

 **Descrição:** É a nossa branch principal e ela reflete exatamente o que está no ar. **Regra de ouro: Nunca trabalhamos ou commitamos diretamente na main.** Ela só recebe código finalizado, testado e aprovado.

#### `feat/` (Feature)

**Descrição:** Usada para desenvolver novas funcionalidades, componentes ou páginas.

### 🔄 2. O Fluxo de Trabalho

####  Passo 1: Atualizar o código (Pull)

Baixa as últimas alterações do repositório remoto e as mescla com a sua branch atual.

    git pull origin <nome-da-branch> 

 ⚠️ **Atenção:** Utilize o `git pull` SEMPRE antes de começar a programar no dia e antes de enviar suas alterações.

#### Passo 2: Preparar as alterações (Add)

Para adicionar TODOS os arquivos modificados de uma vez:
    
    git add .
 
Para adicionar apenas um arquivo específico:

    git add <arquivo>

#### Passo 3: Salvar o histórico (Commit)

Grava as alterações no repositório local. A mensagem deve ser curta e explicar exatamente o que aquele bloco de código faz.

    git commit -m "mensagem"

💡 **Dica de Mensagem:** Seja direto e indique o tipo de alteração. Exemplos: `"feat: cria seção de depoimentos"` ou `"fix: ajusta cor do botão primário"`.

#### Passo 4: Enviar para o repositório (Push)

Envia as suas alterações locais (os seus commits) para o repositório remoto, deixando seu código disponível para o resto da equipe.
    
    git push origin <nome-da-branch> 




