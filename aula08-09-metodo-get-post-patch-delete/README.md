# Aula 08 e Aula 09 — Métodos HTTP com NestJS


Projeto desenvolvido durante as aulas de **NestJS**, com o objetivo de praticar a criação de uma API REST utilizando os principais métodos HTTP:


- GET
- POST
- PATCH
- DELETE


Na Aula 08 foram criadas as rotas e o DTO para gerenciamento de convidados. Na Aula 09 foi implementada a camada de serviço responsável pela manipulação dos dados e pelo tratamento de erros.


## Tecnologias utilizadas


- Node.js
- NestJS
- TypeScript
- NPM


## Criação do projeto


```bash
nest new aula-08-09-metodo-get-post-patch-delete
Estrutura principal
aula-08-09-metodo-get-post-patch-delete/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   ├── criar-convidado.dto.ts
│   ├── convidados.controller.ts
│   └── convidados.service.ts
├── package.json
└── README.md
Status do servidor
A aplicação possui uma rota para verificar se o servidor está ativo.
GET /status
Retorna:
Status: Servidor Ativo!
A resposta é fornecida pelo AppService e acessada através do AppController.
Gerenciamento de convidados
A API possui um recurso chamado convidados, responsável pelo cadastro e gerenciamento de convidados.
Os dados são armazenados temporariamente em memória através de um array no ConvidadosService.
Dados iniciais
ID
Nome
Idade
1
Rebeca
20
2
Leonardo
18
3
Sergio
18
4
Jamily
22
5
Alvaro
21
Métodos HTTP
GET — Listar convidados
Endpoint:
GET /convidados
Retorna a lista de convidados cadastrados.
POST — Criar convidado
Endpoint:
POST /convidados
Recebe os dados do convidado através do corpo da requisição.
Exemplo:
{
  "nome": "Maria",
  "idade": 23
}
A API retorna uma mensagem de confirmação juntamente com os dados enviados.
Exemplo de resposta:
{
  "mensagem": "Convidado(a) Maria, foi adicionado(a) com sucesso!",
  "dados": {
    "nome": "Maria",
    "idade": 23
  }
}
PATCH — Atualizar idade
Endpoint:
PATCH /convidados/:id
Permite atualizar a idade de um convidado específico.
Exemplo:
PATCH /convidados/1
Corpo da requisição:
{
  "idade": 21
}
O serviço localiza o convidado pelo ID e atualiza sua idade.
DELETE — Remover convidado
Endpoint:
DELETE /convidados/:id
Remove um convidado da lista utilizando seu ID.
A operação utiliza o código HTTP 204, indicando que a requisição foi processada sem conteúdo de resposta.
DTO
Foi criado o CriarConvidadoDto para representar os dados necessários para criação de um convidado:
export class CriarConvidadoDto {
  nome: string;
  idade: number;
}
O DTO possui os seguintes campos:
Campo
Tipo
Descrição
nome
string
Nome do convidado
idade
number
Idade do convidado
Service
O ConvidadosService concentra a lógica de gerenciamento dos convidados.
Entre suas responsabilidades estão:
Listar convidados;
Localizar um convidado pelo ID;
Atualizar a idade de um convidado;
Remover um convidado;
Informar quando um convidado não foi encontrado.
Para situações em que o ID não existe, é utilizada a exceção NotFoundException do NestJS.
Exemplo:
throw new NotFoundException(
  `[ADMINISTRADOR] Convidado com ID ${id} não encontrado!`
);
Decorators utilizados
Durante o projeto foram utilizados diversos decorators do NestJS:
Decorator
Função
@Controller()
Define um controlador e sua rota base
@Get()
Define uma rota HTTP GET
@Post()
Define uma rota HTTP POST
@Patch()
Define uma rota HTTP PATCH
@Delete()
Define uma rota HTTP DELETE
@Body()
Acessa dados enviados no corpo da requisição
@Param()
Acessa parâmetros da URL
@HttpCode()
Define o código HTTP retornado pela rota
@Injectable()
Permite que uma classe seja utilizada pelo sistema de injeção de dependências
Tratamento de erros
O projeto utiliza NotFoundException para informar quando um convidado não existe na lista.
Isso permite retornar uma resposta HTTP apropriada quando o usuário tenta consultar, atualizar ou remover um ID inexistente.
Como executar o projeto
Instale as dependências:
npm install
Execute o projeto em modo de desenvolvimento:
npm run start:dev
Por padrão, a aplicação ficará disponível em:
http://localhost:3000
Resumo da aula
O projeto permitiu praticar:
Criação de uma aplicação NestJS;
Criação de controllers;
Criação de services;
Injeção de dependências;
Criação de DTO;
Métodos HTTP GET, POST, PATCH e DELETE;
Parâmetros de rota;
Corpo de requisições;
Códigos de status HTTP;
Tratamento de exceções;
Organização básica de uma API REST.

