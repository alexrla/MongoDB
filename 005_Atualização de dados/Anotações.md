# MongoDB



### Atualização de dados



#### updateOne

- **Para atualizar um único dado, utilizamos o método `updateOne` (primeiro realizamos um filtro e em seguida inserimos o que deve ser alterado/atualizado);**

- **Exemplo:**

  ```shell
  db.nome_da_coleção.updateOne({ filtro }, { $set: { atualização} })
  ```

  - **No operador `$set` é onde se localizam os valores que sofrerão as atualizações;**
  
    

#### Atualizando vários itens

- **Para realizar a atualização de vários itens ao mesmo tempo, utilizamos o método `updateMany` (possui a mesma lógica do método `updateOne`);**

- **Exemplo:**

  ```shell
  db.nome_da_coleção.updatemany({ filtro }, { $set: { atualização } })
  ```

  

#### Adicionandos dados

- **O `update` pode ser utilizado para adicionar um dado ao documento (basta inserir um valor para uma chave, que ainda não existe);**



#### Alterando todos os dados do documento

- **Podemos alterar todos os dados do documento, através do método `replaceOne`;**

  - **Exemplo:**

    ```shell
    db.nome_da_coleção.replaceOne({ filtro }, { atualização })
    ```

  - **O `_id` preservado;**



#### Atualizando arrays

- **Se tentarmos atualizar um array, de forma direta, iremos acabar substituindo ele completamente;**

- **Se quisermos adicionar um item, iremos utilizar o operador `$push`:**

  ```shell
  db.nome_da_coleção.updateOne({ filtro }, {$push: { chave: valor }})
  ```

  

#### Atualizando todos os itens de uma coleção

- **Para atualizar todos os itens, podemos utilizar o método `updateMany`, só que, não iremos passar nenhum filtro:**

  ```shell
  db.nome_da_coleção.updateMany({}, { $set: { atualização }})
  ```

  
