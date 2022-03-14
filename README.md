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





## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais produtos/vendas. |
| `POST` | Utilizado para criar um novo produto/venda. |
| `PUT` | Atualiza dados de um produto/venda ou altera sua situação. |
| `DELETE` | Remove um produto/venda do sistema. |


## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Criado com sucesso com sucesso.|
| `204` | Sem conteúdo.|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `422` | Dados informados estão fora do escopo definido para o campo.|


<br>

## EndPoints

# Usuários [/user]

### Criar /user [POST]
+ Request (application/json)

    + body

            {
                "displayName": "zeca pagodinho",
                "email": "zeca@email.com",
                "password": "123456",
                "image": "http://4.bp.blogspot.com/"
            }
+ Response 201 (application/json, Token fictício)

            {           
                "Authorization": MywiZXhwIjoxNjQ3NDQwNjIzfQ.osA0qOI5CgJFkMqubqT7Vu7AAl5lx
            }

#### Quando as validações falham

Caso "displayName" seja passado, deve possuir pelo menos de 8 caracteres.

+ Request (application/json)

    + body
    
            {
                "displayName": "zeca",
                "email": "zeca@email.com",
                "password": "123456",
                "image": "http://4.bp.blogspot.com/"
            }

+ Response 400 (application/json)

          {
              ""message": "\"displayName\" length must be at least 8 characters long"
          }

Quando "email" não é passado.

+ Request (application/json)

    + body

            {
                "displayName": "zeca pagodnho",
                "password": "123456",
                "image": "http://4.bp.blogspot.com/"
            }
+ Response 400 (application/json)

          {
              "message": "\"email\" is required" 
          }

Quando "email" não tem um formato valido (algo@algo.com).

+ Request (application/json)

    + body

            {
                "displayName": "zeca pagodinho",
                "email": "zeca@email",
                "password": "123456",
                "image": "http://4.bp.blogspot.com/"
            }

+ Response 422 (application/json)

          {
               "message": "\"email\" must be a valid email"
          }

Quando "password" não é passado.

+ Request (application/json)

    + body

          {
            "displayName": "zeca pagodinho",
            "email": "zeca@email.com",
            "image": "http://4.bp.blogspot.com/"
          }

+ Response 400 (application/json)

          {
              ""message": "\"password\" is required"
          }

Quando "password" possui menos de 6 caracteres.

+ Request (application/json)

    + body

            {
              "displayName": "zeca pagodinho",
              "email": "zeca@email.com",
              "password": "1234",
              "image": "http://4.bp.blogspot.com/"
            }

+ Response 422 (application/json)

          {
              ""message": "\"password\" length must be 6 characters long"
          }

### Listar /user [GET]

Listar todos os usuários salvos no banco de dados  /user
+ Request (application/json)

    + Headers (Token fictício)

            {           
                "Authorization": "MywiZXhwIjoxNjQ3NDQwNjIzfQ.osA0qOI5CgJFkMqubqT7Vu7AAl5lx"
            }

+ Response 200 (application/json)

        [
            {
                "id": 1,
                "displayName": "Lewis Hamilton",
                "email": "lewishamilton@gmail.com",
                "image": "https://upload.wikimedia.org/wikipedia/"
            }
        ]


### Listar por id /user/id [GET]

Listar usuários por um id específico /user/1

+ Request (application/json)

  + Headers (Token fictício)

            {           
                "Authorization": "MywiZXhwIjoxNjQ3NDQwNjIzfQ.osA0qOI5CgJFkMqubqT7Vu7AAl5lx"
            }

+ Response 200 (application/json)

          {
              "id": 1,
              "displayName": "Lewis Hamilton",
              "email": "lewishamilton@gmail.com",
              "image": "https://upload.wikimedia.org/wikipedia"
          }
          
  ### Quando o usuário não existe /products/5
          
  + Response 404 (application/json)

          {
              "message": "User does not exist"
          }

### Deletar /products/me  [DELETE]

Para deletar seu usuário deve passar user/me

+ Request (application/json)

  + Headers (Token fictício)

            {           
                "Authorization": "MywiZXhwIjoxNjQ3NDQwNjIzfQ.osA0qOI5CgJFkMqubqT7Vu7AAl5lx"
            }

+ Response 204

### Atualizar /products/id  [PUT]

Passamos o id do produto que queremos atualizar /products/4

+ Request (application/json)

    + body

            {  
                "name": "blusa verde",
                "quantity": 300
            }

+ Response 200 (application/json)

          {
            "id": 4,
            "name": "blusa verde",
            "quantity": 300
          }

Passamos o id de um  produto que não existe /products/89

+ Request (application/json)

    + body

            {  
                "name": "blusa verde",
                "quantity": 300
            }

+ Response 404 (application/json)

          {
            "message": "Product not found"
          }

#### Quando as validações falham

Quando "name" não é passado.

+ Request (application/json)

    + body

            {           
                "quantity": 300
            }
+ Response 400 (application/json)

          {
              "message": "\"name\" is required" 
          }

Quando "name" não é uma string.

+ Request (application/json)

    + body

            {        
                "name": 200,   
                "quantity": 300
            }
+ Response 422 (application/json)

          {
              "message": "\"name\" must be a string"
          }

Quando "name" possui menos de 5 caracteres.

+ Request (application/json)

    + body

            {        
                "name": "cas",   
                "quantity": 300
            }
+ Response 422 (application/json)

          {
              "message": "\"name\" length must be at least 5 characters long"
          }

Quando "quantity" não é passado.

+ Request (application/json)

    + body

            {        
                "name": "camisa azul"
            }
+ Response 400 (application/json)

          {
              "message": "\"quantity\" is required"
          }

Quando "quantity" não é um number.

+ Request (application/json)

    + body

            {        
                "name": "camisa azul",
                "quantity": "300"
            }
+ Response 422 (application/json)

          {
              "message": "\"quantity\" must be a number"
          }

Quando "quantity" não é um numero inteiro.

+ Request (application/json)

    + body

            {        
                "name": "camisa azul",
                "quantity": 3.22
            }
+ Response 422 (application/json)

          {
               "message": "\"quantity\" must an integer"
          }

Quando "quantity" não é um numero positivo.

+ Request (application/json)

    + body

            {        
                "name": "camisa azul",
                "quantity": -2
            }
+ Response 422 (application/json)

          {
                "message": "\"quantity\" must be greater than or equal to 1"
          }

### Deletar /products/id  [DELETE]

Para deletar um produto passamos o id desejado /products/4


+ Response 204

Id de um  produto que não existe /products/89

+ Response 404 (application/json)

          {
            "message": "Product not found"
          }


# Vendas [/sales]

### Listar /sales [GET]

Listar todos as vendas salvos no banco de dados  /sales

+ Response 200 (application/json)

          [
              {
                "saleId": 1,
                "date": "2022-03-02T18:45:07.000Z",
                "productId": 1,
                "quantity": 5
              },
              {
                "saleId": 1,
                "date": "2022-03-02T18:45:07.000Z",
                "productId": 2,
                "quantity": 10
              },
              {
                "saleId": 2,
                "date": "2022-03-02T18:45:07.000Z",
                "productId": 3,
                "quantity": 15
              }
          ]



### Listar por id /sales/id [GET]

Listar venda por um id específico /sales/2

+ Response 200 (application/json)

          [
              {
                "date": "2022-03-02T18:45:07.000Z",
                "productId": 2,
                "quantity": 15
              }
          ]
          
### Quando o produto não existe /products/5
          
+ Response 404 (application/json)

      [
        {
          "message": "Product not found"
        }
      ]  

### Criar  /sales/id [POST]

+ Request (application/json)

  + body

        [
          {
            "productId": 1,
            "quantity": 2
          },
          {
            "productId": 2,
            "quantity": 5
          }
        ]

+ Response 201 (application/json)

          {
              "id": 3,
              "itemsSold": [
                {
                  "productId": 1,
                  "quantity": 2
                },
                {
                  "productId": 2,
                  "quantity": 5
                }
              ]
          }

Quando a quantidade do produto não existe no banco de dados.

+ Request (application/json)

    + body

          [
            {
              "productId": 1,
              "quantity": 200
            },
            {
              "productId": 2,
              "quantity": 1
            }
              {
              "productId": 3,
              "quantity": 100
            }
          ]

+ Response 422 (application/json)

          {
              "message": "Such amount is not permitted to sell. ProductId: 1, 3"
          }

Quando o id do produto não existe no banco de dados.

+ Request (application/json)

    + body

          [
            {
              "productId": 1,
              "quantity": 2
            },
            {
              "productId": 67,
              "quantity": 1
            },
              {
              "productId": 99,
              "quantity": 1
            }
          ]

+ Response 404 (application/json)

          {
              "message": "Product not found. ProductId: 67, 99"
          }

#### Quando as validações falham

Quando "quantity" não é passado.

+ Request (application/json)

    + body

          [
            {    
                "productId: 1
            }
          ]

+ Response 400 (application/json)

          {
              "message": "\"quantity\" is required"
          }

Quando "quantity" não é um number.

+ Request (application/json)

    + body

          [
            {        
                "productId: 1,
                "quantity": "300"
            }
          ]

+ Response 422 (application/json)

          {
              "message": "\"quantity\" must be a number"
          }

Quando "quantity" não é um numero inteiro.

+ Request (application/json)

    + body

          [
            {        
                "productId: 1,
                "quantity": 3.22
            }
          ]

+ Response 422 (application/json)

          {
               "message": "\"quantity\" must an integer"
          }

Quando "quantity" não é um numero positivo.

+ Request (application/json)

    + body

          [
            {        
                "productId: 1,
                "quantity": -2
            }
          ]

+ Response 422 (application/json)

          {
                "message": "\"quantity\" must be greater than or equal to 1"
          }

Quando "productId" não é passado.

+ Request (application/json)

    + body

          [
            {    
                "quantity": 1
            }
          ]

+ Response 400 (application/json)

          {
              "message": "\"productId\" is required"
          }

Quando "productId" não é um number.

+ Request (application/json)

    + body

          [
            {        
                "productId": "3"
                "quantity": 1,
            }
          ]

+ Response 422 (application/json)

          {
              "message": "\"productId\" must be a number"
          }

Quando "productId" não é um numero inteiro.

+ Request (application/json)

    + body

          [  
            {        
                "productId": 3.22
                "quantity: 1,
            }
          ]

+ Response 422 (application/json)

          {
               "message": "\"productId\" must an integer"
          }

Quando "productId" não é um numero positivo.

+ Request (application/json)

    + body

          [
              {        
                "productId": -2,
                "quantity: 1
              }
          ]

+ Response 422 (application/json)

          {
                "message": "\"productId\" must be greater than or equal to 1"
          }

### Atualizar  /sales/id [PUT]

+ Request (application/json)

    + body

          [
            {
              "productId": 1,
              "quantity": 1
            }
          ]

+ Response 200 (application/json)

          {
              "saleId": 1,
              "itemUpdate": [
                {
                  "productId": 1,
                  "quantity": 1
                }
              ]
          }

Quando a quantidade do produto não existe no banco de dados.

+ Request (application/json)

    + body

          [
            {
              "productId": 1,
              "quantity": 200
            }
          ]

+ Response 422 (application/json)

          {
              "message": "Such amount is not permitted to sell"
          }

Quando o id do produto não existe no banco de dados.

+ Request (application/json)

    + body

            [
              {
                "productId": 89,
                "quantity": 2
              }
            ]

+ Response 404 (application/json)

          {
              "message": "Product not found"
          }

#### Quando as validações falham

Quando "quantity" não é passado.

+ Request (application/json)

    + body

          [
            {    
                "productId: 1
            }
          ]

+ Response 400 (application/json)

          {
              "message": "\"quantity\" is required"
          }

Quando "quantity" não é um number.

+ Request (application/json)

    + body

          [
            {        
                "productId: 1,
                "quantity": "300"
            }
          ]

+ Response 422 (application/json)

          {
              "message": "\"quantity\" must be a number"
          }

Quando "quantity" não é um numero inteiro.

+ Request (application/json)

    + body

          [
            {        
                "productId: 1,
                "quantity": 3.22
            }
          ]

+ Response 422 (application/json)

          {
               "message": "\"quantity\" must an integer"
          }

Quando "quantity" não é um numero positivo.

+ Request (application/json)

    + body

          [
            {        
                "productId: 1,
                "quantity": -2
            }
          ]

+ Response 422 (application/json)

          {
                "message": "\"quantity\" must be greater than or equal to 1"
          }

Quando "productId" não é passado.

+ Request (application/json)

    + body

          [
            {    
                "quantity": 1
            }
          ]

+ Response 400 (application/json)

          {
              "message": "\"productId\" is required"
          }

Quando "productId" não é um number.

+ Request (application/json)

    + body

          [
            {        
                "productId": "3"
                "quantity": 1,
            }
          ]

+ Response 422 (application/json)

          {
              "message": "\"productId\" must be a number"
          }

Quando "productId" não é um numero inteiro.

+ Request (application/json)

    + body

          [  
            {        
                "productId": 3.22
                "quantity: 1,
            }
          ]

+ Response 422 (application/json)

          {
               "message": "\"productId\" must an integer"
          }

Quando "productId" não é um numero positivo.

+ Request (application/json)

    + body

          [
              {        
                "productId": -2,
                "quantity: 1
              }
          ]

+ Response 422 (application/json)

          {
                "message": "\"productId\" must be greater than or equal to 1"
          }

### Deletar /sales/id  [DELETE]

Para deletar um produto passamos o id desejado /products/4


+ Response 204

Id de um  produto que não existe /products/89

+ Response 404 (application/json)

          {
            "message": "Product not found"
          }


 - Este projeto foi feito com muita dedicação e carinho por Marco Mecenas  [Entre em contato!](https://www.linkedin.com/in/marcomecenasfilho/).
