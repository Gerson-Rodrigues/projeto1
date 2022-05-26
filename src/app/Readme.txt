

Em Angular, todo componente é composto de 4 arquivos.

.html Arquivo que contém o código HTML do Componente 


.css Contém a folha de estilo dedicada ao componente.


.ts Código typescript que contém a programação do componente


.spec.ts Código Typescript para programamção de teste do componente



Desenvolvimento de componentes no Angular

Iremos criar 3 componentes 
painel-principal
cadastro-tarefas
consulta-terefas


Cada um destes componentes deverá ser axibido dentro 
da área do layout
do projeto(Appcomponent.html)

Cada componente que iremos criar será composto de 4 arquivos
.html
.css
.ts
.spec.ts


Para criarmos componentes, precisamos primeiro parar o servidor.
"CONTROL + C" 

ng g c painelPrincipal
//ng generate component painelPrincipal

ng g c cadastroTarefas

ng g c consultaTarefas

https://angular.io/api/router

SPA (single page application)

Link.. Consulta formulários reativos

https://angular.io/guide/reactive-formulários

(capturar os dados das tarefas =)

Criando um artefato no Angular pra desenvolvermos o modelo de dados 
que será utilizado para capturar as informações das tarefas.

ng generate interface models/Tarefa model

Explicando o comando:
<Criação><Artefato><PASTA><NOME><TIPO>


Criando um outro artefato no projeto que irá gravar as informações
das tarefas em memória no projeto Angular(Projeto1)

ng g service services/tarefas
<criação><artefato><pasta><nome>

/src/app/services/tarefas.services.ts
Criando funções para armazenar os dados das 
tarefas cadastradas em memória

===================================================================

NGX - PAGINATION 

https://www.npmjs.com/package/ngx-PAGINATION
Componente desenvolvido para Angular voltado para realização
de paginação de dados (tabelas, listas ect)


npm i ngx-PAGINATION
após terminar. . . 
verificar a instalação no /packckage.json
verificar se a biblioteca foi instalada

ir no ../app.module.ts
e reconhecer a biblioteca

No app.module.ts fazer a importação ngx. . . 


ir para a pagina de consultaTarefas



