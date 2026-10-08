
# Aula 12 — Request Response Advanced


## Descrição


Nesta aula foram trabalhados conceitos de **Request e Response** utilizando o **NestJS**, com foco no acesso a cabeçalhos HTTP, manipulação de respostas e criação de uma rota protegida por chave de API.


Também foi realizada a configuração dos controllers e providers no módulo principal da aplicação.


## Estrutura do projeto


```text
aula12-request-response-advenced/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── seguranca.controller.ts
```

## AppService
O arquivo app.service.ts contém o serviço responsável por fornecer a mensagem de status do servidor.
import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Status: Servidor Ativo';
  }
}
Método getHello()
O método getHello() retorna:
Status: Servidor Ativo
AppController
O arquivo app.controller.ts é responsável pela rota de status da aplicação.
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

## Rota
GET /status
Quando essa rota é acessada, o controller chama o método getHello() do AppService.
Resposta
Status: Servidor Ativo
SegurancaController
O arquivo seguranca.controller.ts contém uma rota protegida por uma chave de API.
import { Controller, Get, Headers, Res } from "@nestjs/common";
import type { Response } from "express";


@Controller('secret')
export class SegurancaController {
    @Get()
    accessAreaSecret(@Headers('y-api-key') apiKey:string, @Res() res: Response){
        if(apiKey === 'FULLSTACK-2026'){
            res.setHeader('y-auth-status', 'verificado');
            return res.status(200).json({
                mensagem: 'Acesso concedido a Area secreta!',
                log:new Date(),
            });
        }


        return res.status(403).json({
            erro:'Forbidden',
            mensagem: 'Chave API inválida ou ausente',
            log: new Date(),
        });
    }
}

## Rota protegida
GET /secret
Para acessar a área secreta, é necessário enviar o cabeçalho:
y-api-key: FULLSTACK-2026
Uso do @Headers()
O decorator @Headers() permite acessar informações presentes nos cabeçalhos da requisição.
Neste caso:
@Headers('y-api-key') apiKey: string
O valor enviado no cabeçalho y-api-key é recebido pela variável apiKey.
A aplicação utiliza esse valor para verificar se a chave de API é válida.
Validação da chave de API
A aplicação verifica se a chave recebida corresponde à chave definida no código:
if(apiKey === 'FULLSTACK-2026')
Chave válida
Quando a chave é:
FULLSTACK-2026
o acesso à área secreta é concedido.
A aplicação adiciona o cabeçalho:
y-auth-status: verificado
E retorna o status HTTP 200.
Exemplo de resposta:
{
  "mensagem": "Acesso concedido a Area secreta!",
  "log": "data e hora da requisição"
}
Chave inválida ou ausente
Quando a chave não corresponde ao valor esperado, a aplicação retorna o status HTTP 403.
Exemplo:
{
  "erro": "Forbidden",
  "mensagem": "Chave API inválida ou ausente",
  "log": "data e hora da requisição"
}
Uso do @Res()
O decorator @Res() permite trabalhar diretamente com o objeto Response do Express.
No projeto:
@Res() res: Response
O objeto res é utilizado para:
Definir cabeçalhos da resposta;
Definir o status HTTP;
Retornar respostas em formato JSON.
Exemplos utilizados na aplicação:
res.setHeader('y-auth-status', 'verificado');
res.status(200).json({...});
res.status(403).json({...});
AppModule
O arquivo app.module.ts é responsável pela configuração principal dos controllers e providers utilizados pela aplicação.
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { SegurancaController } from './seguranca.controller.js';


@Module({
  imports: [],
  controllers: [AppController, SegurancaController],
  providers: [AppService],
})
export class AppModule {}

## Controllers
Os controllers utilizados pela aplicação são registrados no módulo:
controllers: [AppController, SegurancaController]
Dessa forma, o NestJS reconhece:
AppController;
SegurancaController.
Provider
O AppService é registrado como provider:
providers: [AppService]
Isso permite que o serviço seja utilizado pelo AppController por meio da injeção de dependência.
Status HTTP utilizados
Status
Significado
Situação
200
OK
Chave de API válida e acesso concedido
403
Forbidden
Chave de API inválida ou ausente
Testando as rotas
Verificar o status do servidor
Requisição:
GET http://localhost:3000/status
Resposta:
Status: Servidor Ativo
Acessar a área secreta
Requisição:
GET http://localhost:3000/secret
Com o cabeçalho:
y-api-key: FULLSTACK-2026
Resposta esperada:
{
  "mensagem": "Acesso concedido a Area secreta!",
  "log": "data e hora da requisição"
}
E o cabeçalho da resposta:
y-auth-status: verificado
Testar com chave inválida
Requisição:
GET http://localhost:3000/secret
Com uma chave diferente de:
FULLSTACK-2026
A aplicação retornará:
403 Forbidden
Com uma resposta semelhante a:
{
  "erro": "Forbidden",
  "mensagem": "Chave API inválida ou ausente",
  "log": "data e hora da requisição"
}
Conceitos praticados
Nesta aula foram praticados:
@Controller();
@Get();
@Headers();
@Res();
Response do Express;
Headers HTTP;
Headers personalizados;
Status HTTP;
Respostas JSON;
Chave de API;
Validação de acesso;
Rotas protegidas;
Injeção de dependência;
Services;
Controllers;
Modules;
AppModule;
Request e Response no NestJS.