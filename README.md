Lucas Oliveira Santiago
Ra: 2210370

Hercules Gabriel Araujo Câmara - 2310953


Sistemas Distribuídos - API de Usuários
Este projeto é uma API simples para gerenciamento de usuários, desenvolvida em Node.js com SQLite, JWT para autenticação e Swagger para documentação.

*Pré-requisitos*
Antes de rodar o projeto, certifique-se de ter instalado:

Node.js (versão 16 ou superior)


*Como Rodar o Projeto*
Siga os passos abaixo para configurar e rodar o projeto localmente.


- 1. Instale as Dependências -
Instale as dependências do projeto usando o npm install:

- 2. Configure o Banco de Dados -
O projeto usa SQLite como banco de dados. Um arquivo database.sqlite será criado automaticamente na pasta config quando o servidor for iniciado pela primeira vez. Nenhuma configuração adicional é necessária.

- 3. Configure as Variáveis de Ambiente -
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
JWT_SECRET=UR_KEY
PORT=3000
Substitua UR_KEY por uma chave secreta forte para o JWT.

- 4. Inicie o Servidor -
Execute o seguinte comando para iniciar o servidor:
*node server.js*
O servidor estará rodando em http://localhost:3000, e ainda o swagger http://localhost:3000/api-docs. Caso queira alterar a porta, troque no arquivo raiz do server.js e swagger.
