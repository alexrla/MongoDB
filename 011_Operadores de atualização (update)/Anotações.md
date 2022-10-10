# MongoDB



### Operadores de atualização (update)



#### Operador $inc

- **Utilizado para aumentar/diminuir uma quantidade, especificada a um valor:**

  ```javascript
  db.nome_da_coleção.updateOne(
      { chave: valor }, 
      { $inc: { chave: valor_de_atualização } }
  )
  ```
  
  - **O valor de atualização também pode ser negativo;**



#### Operador $min

- **Atualizar o valor do registro, caso o valor especificado no próprio operador, seja menor que o valor do registro:**
  
  ```javascript
  db.nome_da_coleção.updateOne(
      { chave: valor }, 
      { $min: { chave_1: atualização_1, ..., chave_n: atualização_n  } }
  )
  ```
  
  - **Podemos atualizar mais de um valor;**



#### Operador $max

- **Faz o inverso do operador `%min` (o valor do registro é atualizado, se o valor especificado no operador, for maior que o valor do registro):**

  ```javascript
  db.nome_da_coleção.updateOne(
      { chave: valor }, 
      { $max: { chave_1: atualização_1, ..., chave_n: atualização_n  } }
  )
  ```

  



#### Operador $mul

- **Multiplica o valor de algum registro, por um outro número (no qual especificamos quando utilizamos o operador `$mul`)**

  ```javascript
  db.nome_da_coleção.updateOne(
      { chave: valor }, 
      { $mul: { chave: valor_multiplicativo  } }
  )
  ```
  



#### Operador $rename

- **Utilizado para renomear um campo (podemos definir o nome que quisermos):**

  ```javascript
  db.nome_da_coleção.updateMany(
      {}, 
      { $rename: { chave: "nova_chave"  } }
  )
  ```
  
  - **O novo nome do campo, deve ser inserido entre aspas;**
  



#### Operador $unset

- **Utilizado para remover um campo de um registro:**

  ```javascript
  db.nome_da_coleção.updateMany(
      {}, 
      { $unset: { chave: ""  } }
  )
  ```
  
  - **No exemplo acima, estamos removendo um campo, de todos os registros;**




#### Operador $addToSet

- **Com o operador `$addToSet`, podemos adicionar um ou mais valores, em arrays, mas somente se esses valores não estiverem contidos nesses arrays (não podemos duplicar elementos no array):**

  ```javascript
  db.nome_da_coleção.updateOne(
      // Filtro de campo
      { chave: valor }, 
      { $addToSet: { array: { $each: [valor_1, valor_2, ..., valor_n] }  } }
  )
  ```

  - **O operador `$each`, é utilizado em conjunto com o operador `$addToSet`, para adicionarmos todos os itens do arrays;**
  
  - **Não é case-sensitive, ou seja: `vue != Vue != VUE`;**
  
    

#### Operador $pop

- **Remove o último (utilizamos o 1) ou primeiro (utilizamos o -1) elemento de um array:**

  ```javascript
  db.nome_da_coleção.updateOne(
      // Filtro de campo
      { chave: valor }, 
      { $pop: { array: -1} }
  )
  ```
  
  - **No exemplo acima, estamos removendo o primeiro elemento do array;**



#### Operador $push

- **Adiciona um...**

  ```javascript
  db.nome_da_coleção.updateOne(
      { chave: valor }, 
      { $push: { array: valor } }
  )
  ```

- **Ou mais valores, a um array:**

  ```javascript
  db.nome_da_coleção.updateOne(
      { chave: valor }, 
      { $push: { array: { $each: [valor_1, ..., valor_n] } } }
  )
  ```

  - **Podemos adicionar um elemento já existente ao array, ou seja, podemos duplicar um elemento;**
  - **Para adicionar mais de um elemento ao array, utilizamos o operador `$each`, em conjunto com o operador `$push`;**
  - **Ao realizar a atualização, utilizando o método `updateMany`, não passamos nenhum filtro, somente o registro vazio ( `{}` );**




#### Operador $pullAll

- **Remove vários itens de um array:**

  ```javascript
  db.nome_da_coleção.updateOne(
      { chave: valor }, 
      { $pullAll: { array: [valor_1, ..., valor_n] } }
  )
  ```

  - **Se o elemento passado para remoção, não existir, nada acontece (nenhum tipo de erro é retornado);**
