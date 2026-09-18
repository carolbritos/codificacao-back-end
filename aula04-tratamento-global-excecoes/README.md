Aula 04 — Tratamento Global de Exceções
Tecnologia
JavaScript
Node.js
Express
Tópico
Tratamento global de exceções em aplicações Node.js com Express.
Objetivo
Implementar mecanismos para identificar e tratar erros de forma centralizada, evitando que exceções não tratadas comprometam o funcionamento da aplicação.
Conteúdo
Tratamento de erros síncronos;
Tratamento de erros assíncronos;
Middleware global de tratamento de erros;
Tratamento de uncaughtException;
Tratamento de unhandledRejection;
Criação de rotas para simulação de situações de sucesso e erro;
Retorno de respostas HTTP para os erros identificados.
Ferramentas
Git e GitHub
NPM
Node.js
Express
Estrutura do projeto
aula04-tratamento-global-excecoes/
├── node_modules/
├── package-lock.json
├── package.json
└── server.js

Rotas
/sucesso
Simula uma operação realizada com sucesso.
/erro-sincrono
Simula uma exceção ocorrida durante a execução síncrona da aplicação.
/erro-assincrono
Simula um erro durante uma operação assíncrona.
Execução
Para executar o projeto, utilize:
node server.js

Após iniciar o servidor, as rotas podem ser acessadas pelo navegador ou por uma ferramenta de requisições HTTP.