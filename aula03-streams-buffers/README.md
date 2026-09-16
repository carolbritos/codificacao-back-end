# Aula 03 - Streams e Buffers

## Tópico

Streams e Buffers em Node.js.

## Objetivo

Praticar o uso de Streams para realizar o processamento de arquivos de forma eficiente, evitando a necessidade de carregar todo o conteúdo do arquivo na memória.

## Conteúdo

Nesta aula foram desenvolvidas atividades relacionadas ao processamento de arquivos de log utilizando recursos do Node.js.

### Processamento de Logs

Foi desenvolvido o arquivo `processarLogs.js`, responsável por:

- Ler o arquivo `servidor.log` utilizando `fs.createReadStream()`;
- Processar o conteúdo linha por linha utilizando o módulo `readline`;
- Identificar linhas que possuem a palavra `ERROR`;
- Gravar os erros encontrados no arquivo `apenas_erros.log`;
- Contabilizar a quantidade de erros encontrados;
- Exibir no terminal informações sobre o uso de memória antes e depois do processamento.

## Arquivos

| Arquivo | Descrição |
|---|---|
| `processarLogs.js` | Realiza o processamento do arquivo de log utilizando Streams |
| `servidor.log` | Arquivo utilizado como entrada para o processamento |
| `apenas_erros.log` | Arquivo de saída contendo os registros identificados como erros |
| `package.json` | Configurações e dependências do projeto |

## Tecnologias

- JavaScript
- Node.js

## Recursos utilizados

- `fs`
- `fs.createReadStream()`
- `readline`
- `readline.createInterface()`
- Streams
- Buffers
- Processamento assíncrono

## Execução

Para executar o processamento dos logs, utilize:

```bash
node processarLogs.js
