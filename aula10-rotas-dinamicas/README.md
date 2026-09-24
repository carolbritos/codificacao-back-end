# Aula 10 - Rotas Dinâmicas

Projeto desenvolvido durante a aula de **NestJS**, com o objetivo de praticar a criação de **rotas dinâmicas**, utilização de **parâmetros de rota** e organização da aplicação utilizando **Controllers** e **Services**.

## 📚 Conteúdos abordados

- Criação de rotas dinâmicas com `@Get(':id')`
- Utilização de parâmetros com `@Param()`
- Conversão e validação de parâmetros com `ParseIntPipe`
- Comunicação entre Controller e Service
- Busca de dados pelo ID
- Tratamento de recursos não encontrados com `NotFoundException`
- Organização da aplicação em Controller e Service

## 📁 Estrutura do projeto

```text
aula10-rotas-dinamicas/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── jogos.controller.ts
│   └── jogos.service.ts
├── package.json
└── README.md
⚙️ Funcionamento
A aplicação possui uma rota para verificar o status do servidor:
GET /status
Resposta:
Status Servidor: Ativo
Também possui uma rota dinâmica para buscar um jogo pelo seu ID:
GET /jogos/:id
Por exemplo:
GET /jogos/1
Resposta:
{
  "id": 1,
  "titulo": "Minecraft",
  "estudio": "Mojang Studios"
}
🎮 Jogos cadastrados
Os jogos utilizados como exemplo são armazenados diretamente no JogosService:
ID
Título
Estúdio
1
Minecraft
Mojang Studios
2
The Legend of Zelda: Ocarina of Time
Nintendo
3
Grand Theft Auto V
Rockstar North
4
Elden Ring
FromSoftwarw
5
God of War
Santa Monica Studio
🔀 Rota dinâmica
A rota dinâmica é definida no JogosController:
@Get(':id')
buscarPorId(@Param('id', ParseIntPipe) id: string) {
  const numId = +id;
  return this.jogosService.buscarPorId(numId);
}
O :id representa um parâmetro dinâmico da URL.
Exemplo:
GET /jogos/3
Nesse caso, o valor recebido pelo parâmetro id será:
3
🔎 Busca por ID
A busca do jogo é realizada no JogosService utilizando o método find():
buscarPorId(id: number) {
  const jogo = this.jogos.find((j) => j.id === id);

  if (!jogo) {
    throw new NotFoundException(
      `Jogo com ID ${id} não localizado em nosso estoque.`,
    );
  }

  return jogo;
}
O método procura um jogo cujo id seja igual ao ID informado na URL.
❌ Tratamento de erro
Caso o ID informado não exista, a aplicação utiliza NotFoundException:
throw new NotFoundException(
  `Jogo com ID ${id} não localizado em nosso estoque.`,
);
Por exemplo:
GET /jogos/10
Como não existe um jogo com ID 10, a API retorna um erro informando que o jogo não foi localizado.
🧩 ParseIntPipe
O ParseIntPipe é utilizado para transformar e validar o parâmetro recebido pela rota:
@Param('id', ParseIntPipe) id: string
Isso permite trabalhar com o valor como um número antes de realizar a busca pelo jogo.
🏗️ Organização da aplicação
app.controller.ts
Responsável pela rota de status do servidor:
@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
app.service.ts
Responsável por fornecer a mensagem de status:
@Injectable()
export class AppService {
  getHello(): string {
    return 'Status Servidor: Ativo';
  }
}
jogos.controller.ts
Responsável por receber as requisições relacionadas aos jogos e encaminhá-las para o JogosService.
@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: string) {
    const numId = +id;
    return this.jogosService.buscarPorId(numId);
  }
}
jogos.service.ts
Responsável pelos dados dos jogos e pela lógica de busca pelo ID.
app.module.ts
Responsável por registrar os Controllers e Services utilizados pela aplicação:
@Module({
  imports: [],
  controllers: [AppController, JogosController],
  providers: [AppService, JogosService],
})
export class AppModule {}
🚀 Como executar o projeto
Instale as dependências:
npm install
Execute o projeto em modo de desenvolvimento:
npm run start:dev
O servidor ficará disponível na porta configurada pela aplicação.
🧪 Testando as rotas
Verificar status do servidor
GET /status
Buscar Minecraft
GET /jogos/1
Buscar Zelda
GET /jogos/2
Buscar GTA V
GET /jogos/3
Buscar Elden Ring
GET /jogos/4
Buscar God of War
GET /jogos/5
Testar ID inexistente
GET /jogos/10
Nesse caso, será retornado um erro 404 Not Found.
🛠️ Tecnologias utilizadas
Node.js
NestJS
TypeScript
JavaScript
npm
HTTP
Git
GitHub
🎯 Objetivo da aula
Praticar a criação de rotas dinâmicas no NestJS, utilizando parâmetros de URL, validação com ParseIntPipe, comunicação entre Controller e Service e tratamento de erros com NotFoundException.