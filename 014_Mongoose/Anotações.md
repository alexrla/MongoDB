# MongoDB



### Mongoose



#### O que é

- **Framework de ODM (Object Data Model) para MongoDB;**
  - **A ideia principal é criar um Model para cada uma das coleções e por meio desse Model, definir os campos e os tipos de dados (o que garante mais controle e organização da aplicação);**
  - **Ainda, através dos models, poderemos realizar "`queries`";**
  



#### Criando conexão

- **Para cria a conexão, devemos importar o Monggose e utilizar o método connect;**
  - **No connect passamo o endereço do servidor (no nosso caso, o localhost);**
  



#### Criando Schema

- **Um Schema é a estrutura de dados que vamos inserir no banco (também representa uma coleção);**

- **Nesta classe definimos os campos e os seus tipos (posteriormente, criamos um Model baseado no Schema);**

- **Teremos um Schema para cada coleção;**

  

#### Criando Model

- **A partir de um Schema, podemos criar um Model;**
- **Um Model é responsável pela execução de métodos do Mongoose (como por exemplo, os métodos de CRUD);**
  - **Com a criação do Model, podemos estruturar um dado, instanciando uma nova classe do mesmo;**



#### Salvando dados

- **Para salvar dados, utilizamos o método `save` (existem outros métodos também);**
  - **Podemos verificar a existência de algum erro, através de uma função anônima;**




#### Buscando/Encontrando/Retornando dados

- **Para resgatar dados, utilizamos o método `findOne` (retorna um único registro);**
  - **Caso nada seja encontrado, nos será retornado o `null`;**





#### Inserindo e resgatando vários dados

- **Para inserirmos vários dados, utilizamos o método `insertMany`;**
  - **Enviamos o array de documentos (objetos) a serem inseridos;**

- **Para resgatar vários dados, utilizamos o métod `find`;**



#### Deletando/Removendo dados

- **Para removermos um dado, utilizamos o método `deleteOne`;**
  - **Passamos um filtro para podermos remover um registro específico;**
  



#### Atualizando dados

- **Para atualizarmos um dado, utilizamos o métod `updateOne`;**
  - **Além do filtro, passamos o operador `$set`, junto do que será modificado;**
  



#### Where

- **Método do mongoose, que nos possibilita a utilização de vários filtros em uma mesma "query";**
  - **Podemos unir vários `where's`, a fim de deixar a busca mais precisa;**





