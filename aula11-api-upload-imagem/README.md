# Aula 11 - API de Upload de Imagem

Projeto desenvolvido durante a aula sobre **upload de imagens utilizando NestJS, Multer e Express**.

## 📚 Conteúdos da aula

Nesta aula foram trabalhados:

- Upload de arquivos com NestJS;
- Utilização do `FileInterceptor`;
- Configuração do `Multer`;
- Armazenamento de imagens no servidor;
- Geração de nomes únicos para os arquivos;
- Validação do tipo de arquivo;
- Limitação do tamanho do arquivo;
- Disponibilização das imagens por meio de arquivos estáticos;
- Criação de rotas para upload de imagens;
- Organização utilizando módulos e controllers.

---

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- Express
- Multer
- UUID

---

## 📁 Estrutura do projeto

```text
aula11-api-upload-imagem/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── imagem.controller.ts
│   ├── imagem.module.ts
│   └── main.ts
├── uploads/
├── package.json
└── README.md
⚙️ Configuração do projeto
O projeto utiliza o padrão CommonJS definido no package.json:
{
  "type": "commonjs"
}
🏠 AppController
O AppController possui uma rota inicial utilizando o método GET.
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
A rota:
GET /
retorna a mensagem:
Hello World!
🔧 AppService
O AppService contém o método responsável por retornar a mensagem inicial da aplicação.
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
🧩 AppModule
O AppModule é o módulo principal da aplicação.
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ImagemController } from './imagem.controller.js';

@Module({
  imports: [],
  controllers: [AppController, ImagemController],
  providers: [AppService],
})
export class AppModule {}
O módulo registra:
AppController;
ImagemController;
AppService.
🖼️ Upload de imagem
O upload é realizado através da rota:
POST /imagem/upload
O arquivo deve ser enviado utilizando o campo:
file
Exemplo
No Postman, Insomnia ou outra ferramenta de testes:
POST http://localhost:3000/imagem/upload
No corpo da requisição:
Body
└── form-data
    └── file: arquivo da imagem
📤 ImagemController
O ImagemController é responsável pelo recebimento e armazenamento das imagens.
@Controller('imagem')
export class ImagemController {
O prefixo:
/imagem
é utilizado nas rotas relacionadas ao upload.
📦 FileInterceptor
O FileInterceptor é utilizado para interceptar o arquivo enviado na requisição.
@UseInterceptors(
  FileInterceptor('file', {
O nome:
file
deve ser o mesmo utilizado no campo do formulário enviado na requisição.
💾 Armazenamento das imagens
O projeto utiliza o diskStorage do Multer:
storage: diskStorage({
  destination: './uploads',
Os arquivos enviados são armazenados na pasta:
uploads/
🔑 Nome único para os arquivos
Para evitar conflitos entre nomes de arquivos, é utilizado o UUID:
const nomeArquivo = `${uuidv4()}${extname(file.originalname)}`;
Dessa forma, uma imagem enviada como:
foto.png
pode ser armazenada com um nome semelhante a:
550e8400-e29b-41d4-a716-446655440000.png
O UUID garante um nome único para o arquivo.
📏 Limite do tamanho do arquivo
O upload possui um limite de:
limits: {
  fileSize: 2 * 1024 * 1024
}
Isso corresponde a:
2 MB
Arquivos maiores que esse limite não são aceitos.
🖼️ Tipos de imagem permitidos
O projeto permite os seguintes formatos:
JPG
JPEG
PNG
GIF
WEBP
A validação é realizada através do fileFilter:
fileFilter: (req, file, callback) => {
  if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
    return callback(
      new BadRequestException(
        'Apenas arquivo jpg, jpeg, png, gif e webp são suportados!'
      ),
      false,
    );
  }

  callback(null, true);
}
Caso o arquivo não possua um formato permitido, a API retorna uma exceção informando que o formato não é suportado.
❌ Nenhum arquivo enviado
Também existe uma validação para verificar se algum arquivo foi enviado:
if (!file) {
  throw new BadRequestException('Nenhum arquivo enviado.');
}
Caso nenhum arquivo seja enviado, a API retorna:
Nenhum arquivo enviado.
🌐 Disponibilização das imagens
O arquivo main.ts configura a aplicação para disponibilizar os arquivos armazenados na pasta uploads.
app.useStaticAssets(join(__dirname, '..', 'uploads'), {
  prefix: 'api/uploads'
});
Isso permite acessar as imagens através da URL:
http://localhost:3000/api/uploads/nome-do-arquivo
🛠️ Main.ts
O main.ts é responsável por iniciar a aplicação NestJS.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: 'api/uploads'
  });

  await app.listen(3000);

  console.log('Aplicação rodando em http://localhost:3000');
}

bootstrap();
A aplicação é executada na porta:
3000
A URL inicial é:
http://localhost:3000
📋 Resposta do upload
Quando uma imagem é enviada com sucesso, a API retorna informações sobre o arquivo.
Exemplo:
{
  "filename": "file",
  "size": 123456,
  "url": "http://localhost:3000/api/uploads/550e8400-e29b-41d4-a716-446655440000.png"
}
A resposta contém:
Campo
Descrição
filename
Nome do campo utilizado no upload
size
Tamanho do arquivo enviado
url
Endereço para acessar a imagem
▶️ Executando o projeto
Primeiro, instale as dependências:
npm install
Depois, execute o projeto:
npm run start:dev
A aplicação estará disponível em:
http://localhost:3000
🧪 Testando o upload
Para testar o upload, utilize o Postman ou outra ferramenta semelhante.
Método
POST
URL
http://localhost:3000/imagem/upload
Body
Selecione:
form-data
Adicione um campo:
Key: file
Type: File
Depois selecione uma imagem com um dos formatos permitidos:
.jpg
.jpeg
.png
.gif
.webp
O arquivo deve possuir no máximo:
2 MB
📂 Resultado
Após o upload, o arquivo será armazenado na pasta:
uploads/
E poderá ser acessado através de uma URL semelhante a:
http://localhost:3000/api/uploads/nome-do-arquivo.png
🎯 Objetivo da aula
O objetivo desta aula foi aprender a implementar uma API capaz de receber, validar, armazenar e disponibilizar imagens utilizando NestJS e Multer.
O projeto também demonstra conceitos importantes de desenvolvimento de APIs, como:
criação de endpoints;
recebimento de arquivos;
validação de dados;
tratamento de exceções;
armazenamento no servidor;
geração de identificadores únicos;
disponibilização de arquivos estáticos.