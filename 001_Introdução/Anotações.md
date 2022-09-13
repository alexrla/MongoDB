# MongoDB



### Introdução

#### Banco de dados relacional

- **Também conhecido como SQL (Structured Query Language);**

- **Baseado no modelo relacional (dados representados em tabelas, onde temos linhas e colunas);**

- **Demandam forte configuração de tabelas, colunas, linhas e relações entre as tabelas, para o seu bom funcionamento;**

  

#### Banco de dados não relacional

- **Também conhecidos como NoSQL (Not only SQL);**
- **Diferente dos bancos relacionais, não são tão rigorosos quando a configuração: as "colunas" podem ser criadas quando algum dado é inserido;**
- **Alternativa para situações em que há uma grande quantidade de dados a serem armazenadas, e a estruturação em "tabelas", se torna mais difícil;**
- **Porém, a flexibilidade proporcionada por uma banco não relacional, pode acabar gerando desorganização;**
- **Apesar do nome, bancos não relacionais podem ter relações entre as coleções (_collections_);**



#### MongoDB

- **Banco de dados não relacional (considerado o principal/mais popular banco NoSQL);**
- **Orientado a documentos (os dados são armazenados como documentos);**
- **Dados inseridos no formato de objeto (JSON);**
- **Proximidade com o JavaScript;**
- **Os comandos são métodos;**
- **Pode-se criar relações entre entidades;**
- **Adaptável para diversar linguagens, através de drivers;**



#### Rodando o MongoDB no Linux

- **Comando para inicializar o serviço do MongoDB:**

  ```shell
  sudo systemctl start mongod
  ```

- **Comando para verificar se o MongoDB foi iniciado com sucesso:**

  ```shell
  sudo systemctl status mongod
  ```

- **Comando para parar o serviço do MongoDB:**

  ```shell
  sudo systemctl stop mongod
  ```

- **Comando para reiniciar o serviço do MongoDB:**

  ```shell
  sudo systemctl restart mongod
  ```

- **Comando para rodar o MongoDB:**

  ```shell
  mongo
  ```

- **OBS.: se obtivermos o erro:**

  ```shell
  Failed to start mongod.service: Unit mongod.service not found.
  ```

  **Ao rodar o comando de inicialização do serviço do MongoDB, devemos rodar o seguinte comando: `sudo systemctl daemon-reload`, e em seguida, voltamos a rodar o comando de inicialização;**



#### Entidades

- **Database (db): onde ficam as collections (coleções);**
- **Collections: "tabelas" do banco não relacional (do mongo);**
  - **As collections armazenam os dados;**
  - **Elas podem ser criadas livremente, basta criarmos os dados e inserí-los;**
  - **As collections não possuem "colunas" fixas para os dados;**
- **Documents: os dados;**
  - **Semelhantes aos objetos JSON (o BSON - Binary JSON);**
  - **O BSON é semalhante ao JSON, mas possui alguns recursos a mais;**
  - **Podem conter outros document;**



#### Comandos iniciais

- **`db`: exibe o banco em uso;**
- **`show dbs`: exibe todos os bancos existentes;**
  - **Mesmo que o banco já esteja criado, ele só será exibido nessa lista, se ele tiver algum dado inserido;**
- **`use nome_do_banco`: alterna para o banco informado (se o banco informado não existir, ele será criado);**
- **`db.nome_da_coleção.insertOne({ chave: valor,...})`: insere um dado em uma coleção (collection);**
  - **`db`: refere-se ao banco que está sendo utilizado;**
  - **`nome_da_coleção`: se o nome informado, não corresponder a uma coleção existente, essa coleção acabará sendo criada, com o nome informado;**
  - **`insertOne`: insere um único document na coleção indicada;**
  - **A cada document inserido, um `id` é criado automaticamente, para aquele document (esse `id` é único);**
  - **A forma acima, é uma das formas possíveis de criação de coleções;**
  - **Para inserir vários documents, utilizamos o método `insertMany()`, onde cada document é separado por vírgula;**
- **`db.nome_da_coleção.find()`: exibe todos os documents daquela coleção;**
  - **Se passarmos uma coleção inexistente, nada será exibido;**
  - **Para exibir o primeiro document inserido na coleção, utilizamos o método `findOne()`;**