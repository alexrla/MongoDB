# MongoDB



### Gerenciamento de banco de dados

- **Para verificar os bancos existentes (os bancos até então, criados), utilizamos o comando: `show dbs`;**

  - **Quando utilizamos esse comando, podemos notar a existência de alguns bancos, já criados, que são do próprio MongoDB;**

    

- **Para criar um banco no mongo, utilizamos o comando: `use nome_do_banco`;**

  - **O comando acima, inicializa o banco, porém, se usarmos o comando `show dbs`, não veremos o nosso banco "recém criado", na nossa lista de bancos existentes;**

  - **Para que isso ocorra, para que o banco seja "registrado"/ criado de fato, devemos inserir algum dado nele;**

  - **O comando `use nome_do_banco`, também serve para mudarmos para o banco informado (se o mesmo não existir, ele acaba sendo "criado"/inicializado);**

    

- **Para verificarmos o banco que esta em uso, utilizamos o comando: `db`;**

  

- **Para criar coleções (collections), não temos um comando que faz isso de forma explícita. Uma coleção acaba sendo criada a partir da inserção de um dado. Para isso, utilizamos o seguinte comando: `db.nome_que_será_dado_a_coleção.insertOne(algum_dado...)`;**

  - **Com isso, a coleção acabará sendo criada de forma automática;**
  - **E `db`, faz referência ao banco que está em uso;**



- **Para buscarmos dados/vizualizarmos os dados "cadastrados" no banco, utilizamos o comando `find`;**
  - **O comando `db.nome_da_coleção.find()`: exibe todos os dados cadastrados na coleção;**
  - **Porém, esse comando ainda aceita um filtro, o que nos permite buscar por dados específicos:**
    - **No comando `db.nome_da_coleção.find({chave: valor})`: estamos em busca de um `document` (uma dado/um registro), com chave e valor, definidos;**



- **Para retornar os dados, de uma forma que fique mais legível a visualização dos mesmos, e assim possamos entender melhor aquilo quer foi retornando, podemos utilizar o comando `find`, em conjunto com a função `pretty` (formata os dados retornados);**
  - **`db.nome_da_coleção.find({}).pretty()`;**



- **Existe a possibilidade de criar uma coleção, de forma implícita. Isso é feito através do comando `createCollection`;**
  - **`db.createCollection("nome_da_coleção", {opções})`;**
  - **Existe ainda a possibilidade de definir alguns parâmetros, a fim de configurar a coleção: número máximo de registros, tamanho máximo de coleções, etc.;**
  - **db.createCollection("nome_da_coleção", {capped: true, size: 1000, max: 50});**
    - **No exemplo acima, temos o atributo `capped`, utilizado quando queremos import limitações a coleção;**
    - **`size` define que a coleção poderá salvar até no máximo 1000 bytes;**
    - **`max` define o número máximo de registros para 50 (caso essa limitação seja ultrapassada, os primeiros registros são substituídos);**



- **Para exibir todas as coleções existentes, referentes a um banco, utilizamos o comando `show collections`;**



- **Todo registro criado no banco, vem com uma chave `_id`;**
  - **Esta chave, acaba criando um identificado único para todo registro;**
  - **Ele consegue ser único pois é baseado no tempo em que é criado, mesmo que os dados sejam inseridos simultaneamente (os ids serão distintos);**
  - **Outra funcionalidade dessa chave `_id` (da sua "coluna"), é que ela possui um índice (o que agiliza as consultas por essa chave);**
  - **Sempre que utilizamos o comando `find`, essa chave, automaticamente, também é retornada;**



- **Podemos remover coleções, através do comando: `db.nome_da_coleção.drop()`;**
  - **Após a execução desse comando, além da coleção, todos os seus dados também serão removidos;**
  - **Caso a coleção exista, ao ser removida, é nos retornado `true`. Do contrário, caso ela não exista, é nos retornado `false`;**



- **Para remover um banco, utilizamos o comando: `bd.dropDatabase()`;**
  - **Após a execução desse comando, além do banco, todos os dados e coleções do mesmo, serão removidos;**



- **Podemos importar bancos em JSON. Para isso, utilizamos uma funcionalidade do `tools`, responsável por realizar a importação;**
  - **Comando utilizado: `mongoimport nome_do_arquivo -d nome_do_banco -c nome_da_coleção`;**



- **Também podemos exportar banco de dados em JSON;**
  - **Comando utilizado: `mongoexport -c nome_da_coleção -d nome_do_banco -o nome_do_arquivo_de_saida.json`;**
  - **Esse comando é utilizado para o caso do banco ter apenas uma coleção, ou para exportarmos uma coleção por vez;**



- **Para exportar mais de uma coleção (no caso do banco possui mais de uma coleção), utilizamos o comando: `mongodump -d nome_do_banco -o nome_do_diretório`;**
  - **O `-o` criará uma pasta, com os arquivos de cada collection;**
  - **Os dados são importados em `.bson`;**



- **Para importar os arquivos gerados através do comando `mongodump`, utilizamos o comando: `mongorestore nome_do_diretório`;**
  - **Não é necessário informar uma _flag_ para o diretório, apenas o caminho relativo a ele;**
  - **Caso o banco exista (o banco com as coleções exportadas através do comando `mongodump`), iremos obter um erro nessa tentativa de importação;**



- **Podemos checar algumas informações a respeito do mongo, como por exemplo: a quantidades de consultas feitas, enquanto o mongo está rodando, o consumo de rede, entre outras informações;**
  - **Para isso, utilizamos o comando `mongostat`;**
  - **Uma aba do terminal é ocupada, atualizando a todo segundo, nos trazendo informações em tempo real;**



- **Existe uma forma simples de se remover os bancos que não são mais necessários. Para isso, criamos um loop no nosso terminal;**
  - **Os bancos que devemos preservar são os bancos que já vem no mongo, que são: `admin`, `config` e `local`;**