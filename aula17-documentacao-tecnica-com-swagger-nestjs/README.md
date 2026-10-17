# Aula 17 — Documentação Técnica com Swagger e NestJS

## 📚 Descrição

Este projeto tem como objetivo implementar uma documentação técnica interativa para uma API de estoque de alimentos utilizando o Swagger integrado ao NestJS.

A documentação permite visualizar os endpoints disponíveis, consultar informações sobre as operações da API e verificar os dados necessários para cadastrar produtos.

## ⚙️ Tecnologias utilizadas

- Node.js
- TypeScript
- NestJS
- Swagger
- @nestjs/swagger

## 📁 Estrutura do projeto

```text
aula17-documentacao-tecnica-com-swagger-nestjs/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   └── produtos/
│       ├── produtos.controller.ts
│       └── dto/
│           └── cria-produto.dto.ts
└── README.md
```

## 🚀 Funcionamento

A aplicação utiliza o Swagger para gerar uma documentação interativa da API de estoque de alimentos.

A configuração é realizada no arquivo `main.ts`, utilizando as classes `DocumentBuilder` e `SwaggerModule`, disponibilizadas pelo pacote `@nestjs/swagger`.

### 1. Configuração da documentação

No arquivo `main.ts`, são definidos:

- **Título:** API de Estoque de Alimentos.
- **Descrição:** documentação técnica interativa para integração.
- **Versão:** 1.0.
- **Tag:** Produtos.
- **Autenticação:** configuração de autenticação Bearer.

A documentação é disponibilizada por meio da rota `/docs`.
### 2. Módulo principal

O arquivo `app.module.ts` importa e registra o `ProdutosController`, responsável por disponibilizar a rota de cadastro de produtos.

### 3. DTO de criação de produto

O arquivo `cria-produto.dto.ts` define a classe `CriarProdutoDto`, responsável por descrever os dados utilizados no cadastro de produtos.

Os campos são documentados com o decorador `@ApiProperty()`, que permite especificar exemplos e descrições para cada propriedade.

| Campo | Tipo | Exemplo | Descrição |
|---|---|---|---|
| `nome` | `string` | Café Grão de Ouro 500g | Nome comercial do produto |
| `preco` | `number` | 9.99 | Preço unitário do produto |
| `categoria` | `string` | Alimentos | Categoria do produto |

### 4. Controller de produtos

O arquivo `produtos.controller.ts` implementa o endpoint responsável pelo cadastro de produtos.

Os principais decoradores utilizados são:

- `@Controller('produtos')`: define a rota principal de produtos.
- `@Post()`: define uma operação HTTP POST.
- `@ApiTags('produtos')`: organiza a operação na documentação do Swagger.
- `@ApiOperation()`: descreve a finalidade do endpoint.
- `@ApiResponse()`: documenta as respostas possíveis.
- `@Body()`: recebe os dados enviados no corpo da requisição.

Após receber os dados, o método `criar()` retorna um objeto com um identificador, os dados enviados e a data de criação.

## 📌 Endpoint disponível

| Método HTTP | Rota | Descrição |
|---|---|---|
| POST | `/produtos` | Cadastra um novo produto no estoque |

## 🎯 Objetivo da aula

Compreender como documentar uma API desenvolvida com NestJS utilizando o Swagger, descrevendo endpoints, parâmetros, modelos de dados e respostas HTTP de forma organizada e interativa.