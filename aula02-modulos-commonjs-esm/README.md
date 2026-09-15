# Aula 02 - Módulos CommonJS e ESM

## 📚 Descrição

Nesta atividade foram estudados e praticados conceitos relacionados à utilização de módulos em JavaScript, com foco na organização do código e na criação de funções reutilizáveis.

Também foi desenvolvido um sistema simples para registrar mensagens de log em um arquivo utilizando recursos do Node.js.

## 🎯 Objetivo

Praticar:

- Módulos ESM (ECMAScript Modules);
- Exportação de funções;
- Importação de módulos;
- Organização do código em arquivos separados;
- Utilização do módulo `fs` do Node.js;
- Criação de diretórios;
- Escrita de informações em arquivos;
- Funções assíncronas com `async/await`;
- Tratamento de erros com `try/catch`.

## 📁 Estrutura do projeto

```text
aula02-modulos-commonjs-esm/
│
├── Logs/
│
├── index.js
├── package.json
├── utilitario.js
└── README.md

🛠️ Tecnologias e ferramentas

JavaScript

Node.js

Visual Studio Code

Git

GitHub

Módulos ESM

File System (fs)


📄 Arquivo utilitario.js

Foi criada uma função chamada formatLog, responsável por formatar as mensagens de log.

A função utiliza a data e o horário atual para gerar uma mensagem padronizada.

Exemplo:

export function formatLog(mensagem) {
    const dataAtual = new Date()
        .toISOString().split('T')[0];

    const horaAtual = new Date()
        .toLocaleDateString();

    return (`[${dataAtual} - ${horaAtual}]: ${mensagem}`);
}

📄 Arquivo index.js

No arquivo index.js foi criada uma função assíncrona para registrar os logs do sistema.

Foram utilizados:

async/await;

fs;

mkdir;

appendFile;

try/catch.


A função cria a pasta de logs, formata a mensagem e adiciona o registro ao arquivo.

Exemplos de mensagens utilizadas:

Inicialização do servidor concluída
Conexão com o banco de dados estabelecida

📝 Registro de logs

Os registros são armazenados na pasta:

Logs/

O objetivo é manter um histórico das mensagens geradas pelo sistema.

▶️ Execução

Para executar o projeto, utilize o terminal dentro da pasta da aula:

node index.js

📌 Aprendizados

Durante a atividade foram praticados conceitos importantes do desenvolvimento Back-End com Node.js, principalmente a organização do código através de módulos e a utilização do sistema de arquivos para armazenamento de informações.

A atividade também permitiu trabalhar com funções assíncronas e tratamento de erros.

👩‍💻 Autora

Maria Caroline de Brito Espíndola
