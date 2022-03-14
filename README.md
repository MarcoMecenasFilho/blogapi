<!-- <img src='./images/logo.gif' width="100%"> -->
<br>
<hr>

<h4 align="center"> 
	🚧   ApiBlogs 🚀 Finalizado  🚧
</h4>


<br>
<h2>Sobre</h2>
<p align="justify"> API Blogs é uma aplicação desenvolvida para gerenciar um site de blogs </p 

### Features

-  Cadastro de usuários,  posts, categorias.
-  Sistema de login através de token criptografados
-  Atualizar e deletar posts
-  Sistema de segurança em que apenas o dono do post pode deletar ou apagar
<br>
## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)
- [expressJs](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Joi](https://joi.dev/)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Nodemon](https://www.npmjs.com/package/nodemon)


<br>
<h2>Instalar o projeto em sua máquina</h2>
<br>
<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). É necessário ter  instalado e configurado o [Mysql](https://dev.mysql.com/doc/). Para uma melhor visualização do banco de dados indico a  utilização [MysqlWorkBench](https://www.mysql.com/products/workbench/) e possuir um editor de código, sugiro  o [VSCode](https://code.visualstudio.com/). Para fazer as requisições nos endpoints recomendo o [Postman](https://www.postman.com/).


Renomeio o arquivo .env.example para .env e troque as informações para as que foram criadas quando o MySQL foi configurado. Para o JWT_SECRET= coloque alguma frase secreta, sera usado para gerar tokens seguros.

###  Rodando a aplicação .

```bash
# Clone este repositório
# Foi utilizado SSH
$ git clone git@github.com:MarcoMecenasFilho/storemanager

# Acesse a pasta do projeto no seu terminal/cmd
$ cd blogapi

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run allcomand

```



