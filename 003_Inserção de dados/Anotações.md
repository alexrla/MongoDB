# MongoDB



### Inserção de dados

#### CRUD

- **Create, Read, Update e Delete;**
- **4 operações básicas dos banco de dados (relacionais e não relacionais);**
- **Inserimos, resgatamos/lemos, atualizamos e deletamos/removemos os dados;**



#### Document

- **Ao trabalhar com dados no mongo, é comum adicionarmos várias entidades com chaves (`{}`);**
- **Ao adicionarmos chaves em algum local, chamamos de `document` (documento);**
- **Inserimos documentos nas coleções (o que seria inserir um dado na tabela, em SQL);**



#### insertOne

- **Para inserir um único documento, utilizamos o método `insertOne`: `db.nome_da_coleção.insertOne({chave: valor,...})`;**



#### insertMany

- **Para inserir um ou vários documentos, de uma só vez, utilizamos o comando `insertMany` (passamos uma matriz de documentos para o método e cada documento é separado por vírgula):**

  ```javascript
  db.nome_da_coleção.insertMany([
      {chave: valor, ...},
      {chave: valor, ...},
      {chave: valor, ...},
       .
       .
       .
  ])
  ```



#### insert

- **Método que também pode ser utilizado para a inserção de um ou mais documentos: `db.nome_da_coleção.insert({chave: valor,...},...)`;**
- **Porém, ele é um método antigo, se comparado com os métodos `insertOne` e `insertMany` (é recomendado o uso dos métodos mais recentes/mais novos, ao invés do método `insert`);**



#### Write Concern

- **Configuração que pode ser inserida no `insertMany`;**

- **Podemos limitar o tempo de execução da inserção, retornando um erro de `time out`, caso esse tempo seja excedido;**

- **Exemplo:**

  ```javascript
  {w: "majority", wtimeout: 100}
  
  // No exemplo acima, a inserção tem 100ms para ser executado
  ```

  

#### Observações

- **Se a coleção não existir, no momento da inserção, essa operação de inserção irá acabar criando essa coleção;**

- **Em uma coleção, não precisamos "respeitar" as chaves dos outros documentos, podemos criar documentos que podem ser totalmente diferentes, em uma mesma coleção;**

- **Podemo alterar o `_id` (que é único e criado em todos os documentos da coleção), ao inserir um documento em uma coleção (podemos criar o nosso próprio id):**

  ```javascript
  db.nome_da_coleção.insertOne({_id: "novoId",...},...)
  ```