# MongoDB



### Tipos de dados

- **Categorias para os dados inseridos no sistema;**
  - **Escolher os melhores tipos de dados nos ajuda a ter um projeto melhor estruturado;**
  - **O MongoDB possui alguns tipos diferentes do SQL;**
  - **Alguns tipos: `strings`, `numbers`, `boolean`, `array`, etc;**



#### Textos

- **Mais conhecidos como `strings` (valores inseridos entre aspas nos documentos que criamos);**
  - **As `strings` podem ser inseridas entre aspas duplas ou simples;**



#### Verificando o tipo de dado

- **Para verificar o tipo de dado, podemos utilizar o método `findOne` em algum resgistro e encapsular ele em uma variável. Em seguida, utilizamos o operador `typeof` com o dado que desejamos verificar: `typeof variavel.chave/propriedade` (receberemos um retorno do tipo do dado);**

  - **Alguns dados são considerados objetos;**

  - **Exemplo:**

    ```javascript
    const identificado_da_variável = db.nome_da_coleção.findOne({ filtro })
    
    typeof identificador_da_variável.nome_da_propriedade
    ```



#### Arrays

- **Também conhecidos como listas (utilizados para a inserção de vários itens em um campo);**

  - **Para isso, basta adicionarmos os itens entre colchetes: `[]`;**
  - **E os separá-los por vírgula: `,`;**

- **Os valores em um array, podem ser de qualquer tipo, mas geralmente, tendem a ter valores de um único tipo;**

- **Exemplo:**

  ```javascript
  db.nome_da_coleção.insertOne({ chave: [ "valor1", "valor2", "valor3", ... ] })
  ```

- **Os itens do array podem ser acessados através de índices;**

- **Se formos verificar o seu tipo, iremos ver que se trata/que se é considerado, um objeto;**



#### Data

- **Salvas no mongo, no formato `ISO`;**

- **Pode ser criada a partir da instrução: `new Date()`;**

- **Exemplo:**

  ```javascript
  db.nome_da_coleção.insertOne({ created_at: new Date() })
  ```



#### Documents

- **Parecido com objeto JavaScript (os itens são separados por vírgula);**

- **Guarda dados com chaves e valores;**

- **Exemplo:**

  ```javascript
  db.nome_da_coleção.insertOne({ chave1: valor1, chave2: { chave01: valor01, chave02: valor02, ...} })
  ```

  

#### Booleanos (booleans)

- **Dado que só aceita dois valores: `true` ou `false`;**



#### Números (numbers)

- **Todos os números para o MongoDB, são classificados como `doubles` (a não ser que, explicitamente, declaremos os números como inteiros, através do método `NumberInt()`);**

- **Exemplo:**

  ```javascript
  db.nome_da_coleção.insertOne({ double1: 1, double2: 1.25, inteiro: NumberInt("2") })
  ```









