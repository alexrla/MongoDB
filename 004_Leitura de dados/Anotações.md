# MongoDB



### Leitura de dados

- **Para exibir todos os dados (de uma coleção), utilizamos o comando `find`;**
  - **`db.nome_da_coleção.find({})`: o par de chaves entre os parênteses é opcional (também funciona sem esse par de chaves);**
  - **Utilizando o método `pretty()`, a exibição dos dados é feita de forma formatada;**



#### pretty

- **O método `pretty()` não nos retornar todos os dados e sim um cursor (o mesmo é válido para o comando `find`, sem o método `pretty()`);**
- **Por isso, é necessário digitarmos `it`, para recebermos mais registros (menos dados são retornados, uma espécie de paginação);**
- **O cursor é uma espécie de objeto, que possui métodos em MongoDB (métodos que geralmente modificam a forma que os dados são retornados);**



#### Dado com valor específico

- **Para encontrarmos um dado específico, podemos definir um documento (um filtro) dentro do comando `find`: `db.nome_da_coleção.find({chave: valor,...})`;**



#### Encontrando um dado entre muitos valores

- **Para realizar essa tarefa, utilizamos o operador `$in`;**
  - **`db.books.find({chave: {$in: ["valor_1", "valor_2",...]}})`;**
  - **Vejamos que é necessário a criação de uma lista dos valores que queremos buscar;**
  - **Todos os documentos que contém algum desss valores, serão retornados;**



#### Múltiplas condições

- **Podemos encontrar dados, baseados em múltiplas condições (adicionamos uma vírgula no documento utilizado como filtro e inserimos o próximo requisito);**
  - **Exemplo: `db.nome_da_coleção.find({ chave: valor, chave: valor, ...}).pretty()`;**
  - **O dado deve atender a todos as condições passadas;**



#### Outros operadores

##### $gt (greater than)

- **Busca valores maiores do que um valor que foi determinado;**
  - **Exemplo: `db.nome_da_coleção.find({chave: {$gt: valor}}).pretty()`;**

##### $lt (less than)

- **Busca por valores menos do que o valor que foi especificado;**
  - **Exemplo: `db.nome_da_coleção.find({chave: {$lt: valor}}).pretty()`;**

##### $or

- **Utilizado para resgatar dados que possuem um valor ou outro;**

  - **Exemplo:**

    ```shell
    db.nome_da_coleção.find({ $or: [{chave1: {$gt: valor1}}, {chave2: {$lt: valor2}}]}).pretty()
    ```

  - **Podemos combinar vários operadores;**

#####  OBS:

- **Quando realizamos a filtragem no método `find`, e utilizamos a mesma chave, porém, com operadores diferentes, será levado em conta o último resgistro (o último operador utilizado);**
  - **Exemplo: `db.nome_da_coleção.find({ chave1: {$gt: valor}, chave1: {$lt: valor}}).pretty()`;**
  - **No exemplo acima, será considerado o filtro referente ao operador `$lt`;**



#### AND e OR na mesma consulta

- **Podemos ter vários operadores em uma consulta;**

  - **Exemplo:**

    ```shell
    db.nome_da_coleção.find({ chave: valor, $or: [{chave1: {$gt: valor1}}, {chave2: {$lt: valor2}}]}).pretty()
    ```

  - **O AND aparece quando colocamos a vírgula;**



#### Contando o número de resultados

- **Podemos contar o números de retornos de uma consulta, a partir do método `count`;**
  - **Exemplo: `db.nome_da_coleção.find({ chave: valor }).count()`;**