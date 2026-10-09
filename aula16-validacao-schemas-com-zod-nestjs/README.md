# Aula 16 – Validação de Schemas com Zod no NestJS

## 📌 Descrição
Este projeto tem como objetivo implementar a validação de dados utilizando a biblioteca Zod em uma aplicação desenvolvida com NestJS. A validação garante que os dados enviados na requisição atendam aos critérios definidos antes de serem processados pela aplicação.

## ⚙️ Tecnologias utilizadas
- Node.js
- TypeScript
- NestJS
- Zod

## 📁 Estrutura do projeto
```text
aula16-validacao-schemas-zod-nestjs/
├── src/
│   ├── colaborador.schema.ts
│   ├── zod-validation.pipe.ts
│   ├── colaboradoes.controller.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🧩 Funcionamento
1. Schema de validação
O arquivo colaborador.schema.ts define as regras de validação dos dados de um colaborador utilizando o Zod.
Os campos validados são:
Nome: deve conter no mínimo 3 caracteres.
E-mail: deve possuir um formato válido.
Idade: deve ser um número entre 18 e 65 anos.
Departamento: deve ser um dos seguintes valores: TI, RH, Comercial ou Financeiro.
O arquivo também utiliza z.infer para gerar o tipo TypeScript Colaborador com base no schema definido.
2. Pipe de validação
O arquivo zod-validation.pipe.ts implementa a classe ZodValidationPipe, responsável por validar os dados recebidos no corpo das requisições.
O pipe utiliza o método safeParse() para verificar se os dados atendem às regras do schema.
Quando os dados são inválidos, a aplicação retorna uma resposta HTTP 400 Bad Request, contendo os campos com erros e suas respectivas mensagens.
Quando os dados são válidos, o pipe retorna os dados validados.
3. Controller de colaboradores
O arquivo colaboradoes.controller.ts define a rota responsável pelo cadastro de colaboradores.
A rota utiliza o método HTTP POST e aplica o ZodValidationPipe ao corpo da requisição.
Quando o cadastro é realizado com sucesso, a aplicação retorna uma mensagem de confirmação e os dados do colaborador.
4. Módulo da aplicação
O arquivo app.module.ts configura o módulo principal da aplicação, registrando os controllers e os providers utilizados pelo NestJS.

## 🚀 Endpoint disponível
- Método HTTP
- Rota
- Descrição
- POST
- /colaboradores
Cadastra um colaborador após validar os dados enviados.

## 📥 Exemplo de requisição
Método: POST
Rota: /colaboradores
Corpo da requisição (JSON):
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "idade": 25,
  "departamento": "TI"
}

## 📤 Exemplo de resposta de sucesso
{
  "mensagem": "Colaborador cadastrado com sucesso!",
  "dados": {
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "idade": 25,
    "departamento": "TI"
  }
}

## ❌ Exemplo de resposta com erro
Se os dados enviados não atenderem às regras de validação, a aplicação retornará uma resposta HTTP 400 Bad Request.
{
  "statusCode": 400,
  "erros": [
    {
      "campo": "nome",
      "mensagem": "O nome deve ter no mínimo 3 letras!"
    }
  ]
}

## 🎯 Objetivo da aula
Compreender como utilizar o Zod para definir schemas de validação, integrar regras de validação ao NestJS por meio de pipes personalizados e retornar mensagens de erro claras quando os dados recebidos forem inválidos.

## ✅ Conclusão
A implementação demonstra como integrar o Zod ao NestJS para validar dados de entrada, organizar as regras de negócio relacionadas à validação e melhorar o tratamento de erros nas requisições HTTP.