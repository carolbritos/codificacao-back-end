Aula 06 - Servidor Web
📌 Tecnologia
JavaScript
Node.js
Módulo HTTP
📚 Tópico
Criação de um servidor web utilizando o módulo nativo http do Node.js.
🎯 Objetivo
Criar um servidor web capaz de receber requisições HTTP, identificar o método e a rota acessada e retornar respostas em formato JSON de acordo com a rota solicitada.
📝 Conteúdo
Nesta aula foi desenvolvido um servidor web utilizando o módulo http do Node.js.
O servidor:
É executado na porta 3000;
Registra no console o método HTTP e a rota recebida;
Possui uma rota /status;
Retorna o status 200 quando a rota /status é acessada;
Retorna uma mensagem de erro com status 404 para rotas inexistentes;
Envia respostas no formato JSON;
Utiliza cabeçalhos de segurança HTTP.
Rota /status
Ao acessar:
http://localhost:3000/status

O servidor retorna:
{
  "servidorWeb": "Online"
}

Rotas inexistentes
Quando uma rota que não existe é acessada, o servidor retorna o status 404 e:
{
  "erro": "Página não encontrada!"
}

🔐 Cabeçalhos de segurança
O servidor utiliza os seguintes cabeçalhos:
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Esses cabeçalhos são adicionados às respostas para aplicar algumas medidas básicas de segurança.
🛠️ Ferramentas
Visual Studio Code
Node.js
NPM
Git
GitHub
📂 Estrutura
aula06-servidor-web/
├── package.json
├── servidor.js
└── README.md

▶️ Como executar
No terminal, dentro da pasta do projeto, execute:
node servidor.js

Se o servidor iniciar corretamente, será exibido:
Servidor Web ativo!
Porta: 3000

Depois, acesse no navegador:
http://localhost:3000/status