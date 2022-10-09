# MongoDB



### Seleção de arrays e documents



#### Seleção em embedded documents

- **Para resgatar um dado que está em documento (`document`), que por sua vez, está em um outro documento, precisaremos colocar duas chaves entre aspas e depois aplicamos o valor que estamos buscando (semelhante a uma filtragedem de um dado comum):**

  ```javascript
  db.nome_da_coleção.find({ "chave_1.chave_2": valor })
  ```

  

#### Seleção em embedded documents com operador

- **A lógica acaba sendo a mesma (teremos mais de uma chave e ela acaba ficando entre aspas):**
  
  ```javascript
  db.nome_da_coleção.find({ "chave_1.chave_2": { $operador: valor} })
  ```
  
  

#### Encontrando item específico em um array

- **Para encontrar um item específico em um array, podemos utilizar um valor final:**

  ```javascript
  db.nome_da_coleção.find({ array: valor_final })
  ```

  - **Com isso, todos os registros contendo esse array, que possui esse valor final, acaba sendo retornado;**

- **Agora, para valores exatos, devemos colocar todo o array (os elementos devem estar na mesma ordem em que aparecem no registro):**

  ```
  db.nome_da_coleção.find({ array: [valor_1, valor_2, ...,valor_n] })
  ```

  - **Agora, somente o registro que possui exatamente esse array, será retornado;**




#### Operador $all

- **Utilizado para encontrarmos elementos que contenham apenas alguns valores. Sintaxe:**

  ```javascript
  db.nome_da_coleção({ array: { $all: [ valor_1, valor_2 ] } })
  ```

  - **No exemplo acima, só serão retornados os registros com o array especificado, que possui o _valor_1_ e o _valor_2_ (independentemente da ordem);**





#### Operador $size

- **Nos permite encontrar um registro que contém um array. através do tamanho desse array (sua quantidade de elementos). Sintaxe:**

  ```javascript
  db.nome_da_coleção({ array: { $size: 4 } })
  ```

  - **No exemplo acima, será retornado todos os registro que possuem o array especificado, tendo esse array o tamanho igual a 4 (com 4 elementos);**
  - **OBS.: não podemos trabalhar outros operadores, em conjunto com o operador `$size`;**



#### Selecionando documentos(`documents`) de um array

- **Para fazermos uma seleção específica, devemos colocar todas as características (pares chave e valor) do documento, no filtro do método `find`. Sintaxe:**

  ```javascript
  db.nome_da_coleção.find({
      array: {
          chave_1: valor_1,
          chave_2: valor_2,
          .
          .
          .
          chave_n: valor_n
      }
  })
  ```

  - **Assim, somente o registro específico (aquele que de fato, contém o documento - onde todos os critérios estabelecidos no filtro, foram/são atendidos) será retornado;**
  - **OBS.: as chaves podem ser inseridas entre aspas, ou não;**




#### Array de documentos e operadores

- **Para podermos trabalhar com arrays de documentos e operadores, devemos declarar as chaves entre aspas (iremos acessar a chave do registro, seguida pela chave do documento contido no array). Sintaxe:**

  ```javascript
  db.nome_da_coleção.find({
      "chave_1.chave_2": { $operador: valor }
  })
  ```

  - **Assim, iremos acessar todo o registro, onde pelo menos um documento do array, atende aos critérios estabelecidos;**

    

#### Operador $elemMatch

- **Utilizado para trazermos registros, aplicando múltiplos critérios. Sintaxe:**

  ```javascript
  db.nome_da_coleção.find({
      chave: { 
          $elemMatch:{
      		chave_1: valor_1,
              chave_2: valor_2,
              .
              .
              .
              chave_n: valor_n
      	} 
      }
  })
  ```

  - **OBS_2.: no caso do array dos documentos, podemos passar a chave aplicada nos documentos, para criar um critério a ser atendido;**
  - **OBS_2.: com o`$elemMatch`, podemos utilizar outros operadores;**



#### Retornando campos específicos de um documento

- **Podemos retornar campos específicos de um documento, ao invés de todos os campos, por exemplo:**

  ```javascript
  db.nome_da_coleção({}, { chave_1: 1, chave_2: 1})
  ```

  - **No exemplo acima, retornamos apenas os dados correspondentes a _chave_1_ e a _chave_2_, do documento;**

    - **O documento vazio (`{}`) indica que não queremos passar filtros/critérios;**
    - **O número 1 indica que os valores daqueles campos serão retornados;**

  - **OBS_1.: por padrão, o `_id` é sempre retornado;**

  - **OBS_2: agora, se quisermos remover o `_id` do retorno (ou qualquer outro campo), devemos fazer isso de forma explícita:**

    ```javascript
    db.nome_da_coleção({}, { _id: 0, chave_1: 0, chave_2: 0})
    ```

    - **O 0 (zero) indica que aquele campo não deve ser retornado ;**
    - **Ao invés de especificar os campos que devem ser retornados, podemos especificar quais campos não devem ser retornados;**
    - **Não podemos, de forma explícita, especificar quais campos devem ser retornados e quais campos não devem, ..., ou especificamos quais campos devem ser retornados, ou quais campos não devem ser retornados, as duas especificações ao mesmo tempo, não é possível (obteremos um erro);**

  







