# Aula 14 — Servidor Edge Runtime com Vercel


Nesta aula foi desenvolvido um servidor utilizando uma **API Serverless da Vercel** com execução no **Edge Runtime**.


O objetivo é criar uma função que seja executada na borda da rede e retorne informações sobre o horário do servidor, a região de execução e o tempo necessário para processar a requisição.


## 📁 Estrutura do projeto


```text
aula14-servidor-edge-runtime-vercel/
├── api/
│   └── hora-servidor.ts
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Tecnologias utilizadas
- Node.js
- TypeScript
- Vercel
- Edge Runtime
- API Serverless

## 🚀 Funcionamento
A aplicação possui uma função localizada em:
api/hora-servidor.ts
Essa função é disponibilizada como uma API pela Vercel.
O arquivo utiliza o Edge Runtime através da configuração:
export const config = {
    runtime: 'edge',
};
Dessa forma, a função pode ser executada na infraestrutura de borda da Vercel.

## 📄 Endpoint
Durante o desenvolvimento local, a API pode ser acessada através de:
GET http://localhost:3000/api/hora-servidor
No ambiente da Vercel, o endpoint seguirá o domínio disponibilizado para o projeto:
https://seu-projeto.vercel.app/api/hora-servidor

## 🧩 Código da API
export const config = {
    runtime: 'edge',
};


export default async function handler(req: Request) {
    const inicio = new Date();


    return new Response(
        JSON.stringify({
            mensagem: 'Função executada na borda de rede',
            horarioDoServidor: new Date().toISOString(),
            regiao: 'local-dev',
            tempoDeExecucao: `${Date.now() - inicio.getTime()}ms`,
        }),
        {
            status: 200,
            headers: {
                'content-Type': 'application/json',
            },
        },
    );
}

## 📤 Resposta da API
Ao realizar uma requisição GET, a API retorna um objeto JSON semelhante a:
{
    "mensagem": "Função executada na borda de rede",
    "horarioDoServidor": "2026-10-06T00:00:00.000Z",
    "regiao": "local-dev",
    "tempoDeExecucao": "1ms"
}
Dados retornados
Campo
Descrição
mensagem
Informa que a função foi executada na borda de rede.
horarioDoServidor
Retorna a data e o horário da execução no formato ISO 8601.
regiao
Indica a região utilizada durante a execução. No ambiente local, é apresentada como local-dev.
tempoDeExecucao
Informa o tempo aproximado necessário para executar a função.

## 🌐 Edge Runtime
O Edge Runtime permite que funções sejam executadas em pontos distribuídos da infraestrutura da Vercel, buscando aproximar o processamento do usuário final.
Isso pode contribuir para a redução da latência em determinadas aplicações.
Nesta aula, o Edge Runtime é configurado através de:
export const config = {
    runtime: 'edge',
};

## 🧪 Testando a API
Com o servidor iniciado, a requisição pode ser realizada utilizando uma ferramenta como REST Client, Thunder Client, Insomnia ou diretamente pelo navegador.
Requisição
GET http://localhost:3000/api/hora-servidor
Resultado esperado
A API deve retornar o status:
200 OK
juntamente com os dados em formato JSON.

## 📌 Conceitos aprendidos
Nesta aula foram trabalhados os seguintes conceitos:
- APIs Serverless;
- Vercel;
- Edge Runtime;
- Funções executadas na borda da rede;
- Rotas através da pasta api;
- Requisições HTTP GET;
- Objeto Request;
- Objeto Response;
- Respostas em formato JSON;
- Status HTTP;
- Headers HTTP;
- Data e horário utilizando Date;
- Medição do tempo de execução de uma função.

## 📚 Objetivo da aula
Compreender como criar uma função de API utilizando o Edge Runtime da Vercel, permitindo que uma aplicação utilize funções serverless executadas na infraestrutura de borda.