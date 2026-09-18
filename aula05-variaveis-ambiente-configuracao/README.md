# Aula 05 — Variáveis de Ambiente e Configuração

## Tecnologia

- JavaScript
- Node.js
- Dotenv

## Tópico

Variáveis de ambiente e configuração de aplicações Node.js.

## Objetivo

Aprender a utilizar variáveis de ambiente para armazenar configurações da aplicação de forma separada do código-fonte, permitindo maior organização e segurança das informações.

## Conteúdo

- Configuração de variáveis de ambiente;
- Utilização do pacote `dotenv`;
- Carregamento do arquivo `.env`;
- Acesso às variáveis por meio de `process.env`;
- Configuração da porta do servidor;
- Configuração de chave de API;
- Configuração da URL do banco de dados;
- Validação de variáveis obrigatórias;
- Utilização do arquivo `.env.example`.

## Variáveis de Ambiente

O projeto utiliza as seguintes variáveis:

```env
PORT=3000
API_KEY_PAGAMENTO=
DATABASE_URL=