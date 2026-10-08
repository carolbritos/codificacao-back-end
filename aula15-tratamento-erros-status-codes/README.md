# Aula 15 — Tratamento de Erros e Status Codes


## 📚 Descrição


Nesta aula, foi implementado o tratamento de erros e o uso de **status codes HTTP** em uma API desenvolvida com **NestJS**.


A aplicação possui um recurso de produtos, permitindo listar produtos e buscar um produto específico pelo seu ID.


## ⚙️ Tecnologias utilizadas


- Node.js
- TypeScript
- NestJS
- HTTP
- Status Codes
- Logger do NestJS


## 📁 Estrutura principal


```text
aula15-tratamento-erros-status-codes/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── produtos.controller.ts
│   └── produtos.service.ts
├── test/
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```
🛒 Produtos
A aplicação possui uma lista de produtos cadastrados:

| ID | Produto | Preço |
|---|---|
| 1 | Arroz Namorados | R$ 9,99 |
| 2 | Feijão Timbiras | R$ 7,99 |
| 3 | Macarrão Galo | R$ 5,99 |
| 4 | Açúcar União | R$ 4,99 |
| 5 | Sal Lebre | R$ 9,99 |

## 🚀 Endpoints
Listar produtos
GET
/produtos
Retorna a lista de produtos cadastrados.
Buscar produto por ID
GET
/produtos/:id
Exemplo:
/produtos/1
Retorna o produto correspondente ao ID informado.

## ⚠️ Tratamento de erros
A aplicação utiliza exceções fornecidas pelo NestJS para tratar diferentes situações.
ID inválido
Quando o ID informado não é numérico, é lançada uma exceção:
BadRequestException
Mensagem retornada:
O ID do produto deve ser um número inteiro.
Status HTTP:
400 Bad Request
Produto não encontrado
Quando o ID é numérico, mas não corresponde a nenhum produto cadastrado, é lançada:
NotFoundException
Mensagem retornada:
Produto com ID 10 não localizado.
Status HTTP:
404 Not Found

## 📝 Logger
A aplicação também utiliza o Logger do NestJS para registrar tentativas de acesso inválidas.
Exemplo:
this.logger.warn(`Tentativa de buscar com ID ${idProduto} não numérico`);
Quando um produto não é encontrado:
this.logger.warn(`Produto com ID ${id} não localizado.`);

## 🔄 Fluxo da busca
- O usuário informa o ID do produto.
- O sistema converte o ID para número.
- Caso o ID não seja numérico, retorna 400 Bad Request.
- Caso o ID seja válido, o sistema procura o produto.
- Se o produto não existir, retorna 404 Not Found.
- Se o produto existir, seus dados são retornados.

## ▶️ Execução
Para instalar as dependências:
npm install
Para iniciar a aplicação em modo de desenvolvimento:
npm run start:dev
A API estará disponível localmente para realização dos testes.

## 🎯 Objetivo da aula
O objetivo desta aula é compreender como realizar tratamento de erros em APIs NestJS, utilizando exceções HTTP apropriadas e registrando ocorrências através do Logger.