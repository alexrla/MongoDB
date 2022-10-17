# MongoDB



### Índices no MongoDB



#### O que são índices (indexes)

- **Recursos que podem aumentar a eficiência de uma `query` (deixá-la mais rápida);**
  - **Índices podem ser adicionados a um campo de uma coleção (aplicamos o índice no campo que mais utilizamos nas nossas consultas);**
  - **O `_id` já vem com um índice;**
  - **Os campos com índices são checados primeiro, quando realizamos uma seleção;**
  - **Quando temos um banco com poucos dados, os índices não farão tanta diferença;**



#### Criando um índice

- **Para criar um índice, utilizamos o comando `createIndex`;**

- **Exemplo:**

  ```javascript
  db.nome_da_coleção.createIndex({ campo_do_registro: 1 })
  
  // Para campos de embedded documents, temos a mesma "sintaxe"
  db.nome_da_coleção.createIndex({ "campo.propriedade": 1 })
  ```

  - **Nos exemplos acima, temos uma "sintaxe" de criação de índice para um campo/dado do registro e, a partir daí, as consultas que os utilizam, conseguem ser mais rápidas;**



#### Verificandos os índices de uma coleção

- **Podemos verificar os índices que uma coleção possui:**

  ```javascript
  db.nome_da_coleção.getIndexes()
  ```

  - **Todos os índices criados, serão retornados (além de recebermos o campo do índice);**



#### Listando índices de um banco

- **Para listar os índices de um banco, primeiro fazemos um loop em todas as coleções do banco com um `forEach` e em seguida utilizamos o comando `getIndexes` para resgatar os índices e os exibir;**



#### Removendo índices

- **Para remover índices, utilizamos o comando `dropIndex`:**

  ```javascript
  db.nome_da_coleção.dropIndex({ campo_do_registro_com_índice: 1 })
  ```

  - **Agora, ao realizar consultas a partir do campo no qual removemos o índice, haverá uma querda na performance (e claro o índice foi removido da coleção);**



#### Removendo todos os índices

- **Para remover todos os índices de uma coleção, utilizamos o comando `dropIndexes`:**

  ```javascript
  db.nome_da_coleção.dropIndexes()
  ```

  - **Todos os índices da coleção serão removidos, a exceção do `_id`, que permanece;**



#### Plano de consulta

- **Podemos obter informaçõea a respeito de como o MongoDB faz uma consulta, através do método `explain`:**

  ```javascript
  db.nome_da_coleção.find({ chave: valor }).explain()
  ```

  - **Assim entendemos como ele encontrou o valor informado e ficamos sabendo se algum índice foi utilizado;**



#### Índices compostos

- **Podemos criar um índice para múltiplos campos:**

  ```javascript
  db.nome_da_coleção.createIndex({ campo_1: 1, campo_2: 1, ..., campo_N: 1})
  ```

  - **Mesmo que já tenhámos criado um índice para um dos campos utilizados na criação de um índice para múltiplos campos, essa nova criação será permitida e dará origem a um novo índice;**



#### Índices de texto

- **Facilitam a busca de texto em um campo;**

- **Podemos ter apenas um índice de texto por coleção;**

- **Exemplo:**

  ```javascript
  db.nome_da_coleção.createIndex({ campo: "text"})
  ```

- **Realizando busca por texto:**

  ```javascript
  db.nome_da_coleção.find({ $text: { $search: "algum texto" } })
  ```



#### O porquê de não criar muitos índices

- **Índices desnecessários acabam ocupando o lugar dos índices que realmente precisamos. Logo, o efeito acaba sendo nulo;**



#### OBS.:

- **Comando de importação do banco:**

  ```bash
  mongoimport arquivo.json -d nome_do_banco -c nome_da_coleção
  ```
