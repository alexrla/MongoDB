# MongoDB



### Deletando dados



#### deleteOne

- **A remoção de um item (documento), pode ser feita a partir do método `deleteOne` (essa remoção é baseada em um filtro);**

  - **Exemplo:**

    ```shell
    db.nome_da_coleção.deleteOne({ filtro })
    ```



#### Deletando vários itens

- **Para deletar vários itens, utilizamos o método `deleteMany`;**

  - **Exemplo:**

    ```shell
    db.nome_da_coleção.deleteMany({ filtro })
    ```



#### Removendo todos os itens

- **Para remover todos os itens de uma coleção, utilizamos o método `deleteMany` e deixamos o campo de filtro vazio: `db.nome_da_coleção.deleteMany({})`;**