# MongoDB



### Operadores de query

- **Funcionalidades do MongoDB, que deixam as nossas queries mais precisas;**
- **Esses operadores são divididos em tipos, como por exemplo: comparação e lógicos;**
- **Sintaxe:**
    ```javascript
    $nome_do_operador
    ```
    **Geralmente definimos um documento (`document`), especificando o que queremos filtrar;**



#### Operador de igualdade

- **O operador `$eq` verifica se um registro é igual ao que estamos especificnado no documento. Ex.:**

  ```javascript
  db.nome_da_coleção.findOne({ propriedade: { $eq: valor } })
  ```

- **OBS.: podemos alcançar o mesmo resultado, utilizando o filtro normalmente:**

  ```javascript
  db.nome_da_coleção.findOne({ propriedade: valor })
  ```



#### Operadores: maior que e maior ou igual

- **Os operadores `$gt` e `$gte`, respectivamente, verificam se um dado é maior que e maior ou igual, que um determinado valor espeficiado. Ex.:**

  ```javascript
  // Valores maiores
  db.nome_da_coleção.findOne({ propriedade: { $gt: valor }})
  
  OU
  
  // Valores maiores ou igual
  db.nome_da_coleção.findOne({ propriedade: { $gte: valor }})
  ```

  

#### Operadores: menor que e menor ou igual

- **Os operadores `$lt` e `$lte`, respectivamente, verificam se um dado é menor que e menor ou igual, que um valor especificado. Exs.:**

  ```javascript
  // Valores menores
  db.nome_da_coleção.findOne({ propriedade: { $lt: valor }})
  
  OU
  
  // Valores menores ou igual
  db.nome_da_coleção.findOne({ propriedade: { $lte: valor }})
  ```

  

#### Operador $in

- **Verifica registros que se encaixam em apenas um dos filtros passados, em uma lista de consulta. Ex.:**

  ```javascript
  db.nome_da_coleção.find({ propriedade: { $in: [ filtro1, filtro2, ...] } })
  ```



#### Operador $ne

- **Traz resultados que não contém o valor informado (que o valor é diferente do que foi informado). Ex.:**

  ```javascript
  db.nome_da_coleção.find({ propriedade: { $ne: valor } })
  ```



#### Operador $exists

- **Retornar apenas os dados que possuem determinado campo (propriedade). Ex.:**

  ```javascript
  db.nome_da_coleção.find({ propriedade: { $exists: true } })
  ```



#### Operador $text

- **Faz uma busca sobre o texto do campo que foi informado no filtro. Ex.:**

  ```javascript
  db.nome_da_coleção.find({ $text: { $search: valor_de_busca } }).pretty()
  ```

  **Porém, é necessário a criação de um índice, em alguns dos campos, para que a "instrução" funcione;**

- **Para criarmos o índice, utilizamos o método `createIndex()`. Ex.:**

  ```javascript
  db.nome_da_coleção.createIndex({ propriedade: tipo_do_índice })
  ```

  



