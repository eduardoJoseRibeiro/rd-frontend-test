# \<DesafioFrontend />

**Objetivo:**
Implementar uma aplicação para gerenciar os candidatos que estão em processo seletivo na empresa XYZ. Essa aplicação necessita ser executada nos navegadores mais recentes do mercado.

**API:** [RANDOM USER GENERATOR](https://randomuser.me/)

**Layout:** [Marvel App](https://marvelapp.com/39776de)

**Estimativa:**
Dependendo da sua experiência e/ou das ferramentas escolhidas, você pode precisar de mais ou menos tempo para realizar o desafio.
Lembre-se que vamos avaliar a sua capacidade de estimativa e também a sua capacidade em executar o projeto no tempo planejado.

Ao efetuar a estimativa para realização, por favor avise o RH.


### **Requisitos** ###
 - [x]  Eu como usuário, desejo visualizar a listagem de candidatos;
 - [x]  Eu como usuário, desejo pesquisar um determinado usuário conforme seu **nome** ou **email**;
 - [ ]  Eu como usuário, desejo que seja apresentado a foto de um usuário qualquer no menu da Minha Conta (Buscar da API); [Não entendi onde seria esse item :(]
 - [x]  Eu como usuário, desejo visualizar as informações de cada candidato (Nome, email, telefone, cidade e estado);
 - [x]  Eu como usuário, desejo enviar para a "LIXEIRA" um usuário que esteja na listagem "TODOS" ou "ATENDIDOS";
 - [x]  Eu como usuário, desejo enviar para a listagem "TODOS" um usuário que esteja na listagem "ATENDIDOS" ou "LIXEIRA";
 - [x]  Eu como usuário, desejo marcar como "ATENDIDO" um usuário que esteja na listagem "TODOS" ou "LIXEIRA";
 - [x]  Eu como usuário, desejo navegar nos filtros laterais conforme a interação executada;
 - [x]  Eu como usuário, desejo que ao clicar em um item da listagem seja apresentado as informações do usuário em uma nova tela;
 - [x]  Eu como usuário, desejo que ao visualizar a informação de um usuário seja possível voltar a tela anterior;


### **Especificações Técnicas** ###
O sistema deve seguir o layout proposto, com isso as funcionalidades a serem desenvolvidas serão avaliadas de acordo com o seu nível.

**Nível Junior**
 - [x]  Layout conforme proposto (Dê o seu máximo);
 - [x]  A aplicação deve se comportar como uma Single Page Application;
 - [x]  Utilização de Rotas para navegação;
 - [x]  Ao navegar entre as rotas, as informações devem ser mantidas e não pode haver refresh da listagem;
 - [x]  A busca deverá ser executada na listagem atual;
 - [x]  (Desejável/Bônus) Gerenciamento de estado;
 - [x]  (Desejável/Bônus) Paginação; **Usei paginação Infinita**


**Nível Pleno**
 - [x]  Todos os requisitos do nível anterior;
 - [x]  Paginação númerada; **Usei paginação Infinita**
 - [x]  Armazenar todas as informações no estado utilizando a arquitetura Flux (Redux, Vuex e etc);
 - [x]  Ao navegar nos filtros laterais, todas as informações devem já estar no estado;
 - [ ]  Ao pesquisar, deverá ser armazenado no estado todas as pesquisas realizadas na sessão atual;
 - [x]  Configurar eslint;
 - [ ]  (Desejável/Bônus) Microinterações na interface;
 - [ ]  (Desejável/Bônus) Testes unitários;
 - [ ]  (Desejável/Bônus) Utilizar algum bundle size (Webpack, Rollup ou Parcel);


**Nível Senior**
 - [ ]  Todos os requisitos dos níveis anteriores;
 - [x]  Paginação infinita em vez da numerada;
 - [ ]  Microinterações na interface;
 - [ ]  Testes unitários (mínimo de 70% de coverage);
 - [ ]  Execução dos testes unitários no build do projeto;
 - [ ]  Utilizar algum bundle size (Webpack, Rollup ou Parcel);
 - [ ]  Utilizar alguma metodologia para CSS (BEM, SMACSS, OOCSS, ATOMIC CSS, DRY CSS);
 - [ ]  (Desejável/Bônus) Fazer internacionalização da aplicação;
 - [ ]  (Desejável/Bônus) Realizar testes de snapshot;
 - [ ]  (Desejável/Bônus) Apresentação do coverage dos testes unitários;
 - [ ]  (Desejável/Bônus) Criar o Story Book dos Components;
 - [ ]  (Desejável/Bônus) Separar Dumb Components e publicá-los no NPM;
 - [ ]  (Desejável/Bônus) CSS in JS

### ** Desejável *** ###
 - [ ]  A aplicação deve ser responsiva (mobile, tablet, desktop);
 - [x]  Publicar o projeto em alguma plataforma (Heroku, Wedeploy, etc), afim de ser possível visualizar através de um link;
 Publicado em http://zup.20conectar.com/

### **Especificações Gerais** ###
 - [x]  Utilizar React, Vue ou Angular; **Vue**
 - [x]  Utilizar pré-processador de CSS (Fique a vontade para usar alguma lib/framework css); **Stylus**
 - [x]  ECMAScript 6;
 - [x]  Flexbox;
 - [x]  Documentar, no mínimo, como executar o projeto;
 - [x]  Armazenar o código fonte no Github;
