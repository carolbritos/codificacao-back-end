# Aula 13 - Middlewares e Interceptors com NestJS


Nesta aula foi desenvolvido um exemplo de **Middleware** utilizando o NestJS para realizar registros das requisições e controlar o acesso a uma rota administrativa.


## 📁 Estrutura do projeto


```text
aula13-middleware-interceptors-nestjs/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   └── logger/
│       └── logger.middleware.ts
├── test/
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
├── vitest.config.ts
└── vitest.config.mts
🚀 Criação do projeto
O projeto utilizado nesta aula foi:
aula13-middleware-interceptors-nestjs
Para criar um Middleware utilizando o NestJS CLI:
nest g mi logger
🎯 Objetivos da aula
Compreender o funcionamento de Middlewares no NestJS.
Criar um Middleware personalizado.
Interceptar requisições HTTP antes que elas cheguem ao Controller.
Registrar informações das requisições no console.
Implementar uma verificação de privilégio para uma rota administrativa.
Aplicar um Middleware às rotas da aplicação.
📌 Controller
O AppController possui duas rotas:
GET / — rota pública.
GET /admin — rota administrativa.
app.controller.ts
import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
  @Get()
  getPublic() {
    return {
      mensagem: 'Rota Publica acessada com sucesso!',
      data: new Date(),
    };
  }


  @Get('admin')
  getPrivate() {
    return {
      mensagem: 'Bem-Vindo ao Painel Administrativo',
      data: new Date(),
    };
  }
}
Rota pública
A rota:
GET /
retorna uma mensagem informando que a rota pública foi acessada com sucesso, juntamente com a data e hora da requisição.
Exemplo:
{
  "mensagem": "Rota Publica acessada com sucesso!",
  "data": "2026-09-30T00:00:00.000Z"
}
Rota administrativa
A rota:
GET /admin
retorna uma mensagem de boas-vindas ao painel administrativo.
Exemplo:
{
  "mensagem": "Bem-Vindo ao Painel Administrativo",
  "data": "2026-09-30T00:00:00.000Z"
}
🛡️ Middleware
O Middleware é responsável por executar uma lógica antes que a requisição chegue ao Controller.
Neste projeto, o Middleware foi utilizado para:
Registrar o método e a rota acessada.
Verificar se a requisição está tentando acessar /admin.
Conferir o cabeçalho x-user-base.
Permitir o acesso somente quando o valor for Administrator.
logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const currentUrl = req.originalUrl || req.url;


    console.log(`[LOG] Método: ${req.method} | Rota: ${req.path}`);


    if (currentUrl.startsWith('/admin')) {
      const base = req.headers['x-user-base'];


      if (base !== 'Administrator') {
        return res.status(403).json({
          Codigo: 403,
          mensagem: 'Acesso Negado: Privilégio de Administrator necessário',
          registro: new Date(),
        });
      }
    }


    next();
  }
}
🔎 Funcionamento do Middleware
A cada requisição, o Middleware obtém a URL acessada:
const currentUrl = req.originalUrl || req.url;
Em seguida, registra no terminal o método HTTP e a rota:
console.log(`[LOG] Método: ${req.method} | Rota: ${req.path}`);
Verificação da rota administrativa
Quando a URL começa com /admin, o Middleware verifica o cabeçalho:
x-user-base
O valor esperado é:
Administrator
Caso o valor seja diferente, a requisição é bloqueada e a API retorna o status:
403 Forbidden
Com a mensagem:
{
  "Codigo": 403,
  "mensagem": "Acesso Negado: Privilégio de Administrator necessário",
  "registro": "data da requisição"
}
Quando o usuário possui o privilégio necessário, o Middleware executa:
next();
Isso permite que a requisição continue para o próximo estágio da aplicação.
⚙️ Configuração do Middleware
O Middleware precisa ser registrado no módulo da aplicação.
app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';


@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
O trecho:
consumer.apply(LoggerMiddleware).forRoutes('*');
faz com que o LoggerMiddleware seja aplicado às rotas da aplicação.
🧪 Testando as rotas
1. Acessando a rota pública
Requisição:
GET /
Resultado esperado:
{
  "mensagem": "Rota Publica acessada com sucesso!",
  "data": "data da requisição"
}
No terminal também será exibido um registro semelhante a:
[LOG] Método: GET | Rota: /
2. Acessando /admin sem privilégio
Requisição:
GET /admin
Sem o cabeçalho adequado, o Middleware bloqueia o acesso.
Resultado:
403 Forbidden
Resposta:
{
  "Codigo": 403,
  "mensagem": "Acesso Negado: Privilégio de Administrator necessário",
  "registro": "data da requisição"
}
3. Acessando /admin com privilégio
Para acessar a rota administrativa, deve ser enviado o cabeçalho:
x-user-base: Administrator
Exemplo:
GET /admin
x-user-base: Administrator
Nesse caso, o Middleware permite que a requisição continue até o Controller.
Resultado esperado:
{
  "mensagem": "Bem-Vindo ao Painel Administrativo",
  "data": "data da requisição"
}
📚 Conceitos utilizados
Middleware
Middleware é uma função executada durante o processamento de uma requisição. Ele pode ser utilizado para tarefas como:
Logs;
Autenticação;
Autorização;
Validação;
Tratamento de requisições;
Manipulação de dados antes de chegar ao Controller.
NestMiddleware
A interface:
NestMiddleware
é utilizada para criar Middlewares personalizados no NestJS.
next()
O método:
next();
permite que a requisição continue seu fluxo de execução.
req
Representa a requisição HTTP e permite acessar informações como:
req.method
req.path
req.headers
req.originalUrl
res
Representa a resposta HTTP e permite definir o status e o conteúdo retornado ao cliente.
Exemplo:
res.status(403).json(...)
📝 Resumo
Nesta aula foi criado um Middleware chamado LoggerMiddleware.
O Middleware:
Registra as requisições no terminal;
Identifica a rota acessada;
Verifica o acesso à rota /admin;
Analisa o cabeçalho x-user-base;
Permite o acesso somente para Administrator;
Retorna 403 quando o privilégio necessário não é informado;
Permite que a requisição continue utilizando next().
O Middleware foi registrado no AppModule e aplicado às rotas da aplicação.