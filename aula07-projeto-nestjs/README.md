# Aula 07 - Projeto NestJS

Projeto desenvolvido durante a Aula 07 do curso de Full Stack, utilizando o framework **NestJS** com **Node.js** e **TypeScript**.

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- npm

## 📦 Instalação

Para instalar a CLI do NestJS globalmente:

```bash
npm install -g @nestjs/cli

🏗️ Criação do projeto
O projeto foi criado utilizando o comando:
nest new aula07-projeto-nestjs

Após a criação, foi configurado um endpoint para verificar o status do servidor.
📁 Estrutura principal
aula07-projeto-nestjs/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── ...
├── test/
├── package.json
├── tsconfig.json
└── README.md

⚙️ Implementação
app.service.ts
O AppService contém o método responsável por retornar uma mensagem indicando que o servidor está ativo.
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Servidor Nest.JS Ativo [Aula 07]';
  }
}

app.controller.ts
O AppController utiliza o decorator @Controller('status') para definir a rota /status.
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

🌐 Endpoint
Após iniciar o servidor, o endpoint pode ser acessado em:
GET /status

Resposta esperada
Servidor Nest.JS Ativo [Aula 07]

▶️ Executando o projeto
Para iniciar o projeto em modo de desenvolvimento:
npm run start:dev

O servidor ficará disponível em:
http://localhost:3000

Para acessar o endpoint:
http://localhost:3000/status

🎯 Objetivo da aula
O objetivo desta aula é iniciar o desenvolvimento com NestJS, conhecendo a estrutura básica de um projeto, a criação de controllers e services e a utilização de decorators para criação de rotas HTTP.
