# Codificação Back-End

## Tecnologia

- JavaScript
- Node.js
- Express

## Tópico

Revisão de Node.js e NPM.

## Objetivo

Realizar uma revisão dos conceitos básicos do Node.js, utilizando o módulo nativo `os` para obter informações sobre o sistema operacional, memória RAM e processador da máquina.

## Conteúdo

### Diagnóstico do servidor

Foi desenvolvido o arquivo `diagnostico.js`, utilizando o módulo nativo `os` do Node.js.

O módulo `os` permite acessar informações relacionadas ao sistema operacional e aos recursos de hardware da máquina.

No script foram utilizadas as seguintes funções:

- `os.platform()` — identifica a plataforma/sistema operacional.
- `os.totalmem()` — retorna a quantidade total de memória RAM.
- `os.freemem()` — retorna a quantidade de memória RAM disponível.
- `os.cpus()` — retorna informações sobre os processadores da máquina.

Os valores de memória RAM foram convertidos de bytes para gigabytes (GB) utilizando:

```js
/ (1024 ** 3)
