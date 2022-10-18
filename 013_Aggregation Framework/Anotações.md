# MongoDB



### Aggregation Framework



#### O que é Aggregation

- **Framework do MongoDB;**
- **Principal objetivo: agregar resultados (semelhante as funções de agregação do SQL);**
- **Retorna resultados que não temos somente a partir dos dados;**
- **Nos permite criar relatórios mais completos dos dados do sistema;**
- **Não é necessário instalação;**



#### Pipeline

- **Pipeline é um termo que está ligado ao `aggregation`;**
  - **É o modo que construímos o resultado da nossa `aggregation`;**

  - **Unir diversos métodos gera um pipeline (diversos parâmetros que podemos inserir no nosso `aggregation`, para refinar ainda mais o resultado que queremos);**

  - **Podemos entender pipeline como segmentação;**




#### $bucket

- **Tem como objetivo, agrupar resultados em grupos distintos;**
- **Definimos como um grupo deve ser classificado, baseado em um campo;**
- **E, por exemplo, recebemos uma contagem de dados neste grupo;**



#### $bucketAuto

- **Define `buckets` de uma forma mais automatizada (espécie de `$bucket` rápido);**
- **Definimos quantos `buckets` queremos receber e o MongoDB se encarrega de dividir os dados;**



#### $collStats

- **Operador que tem como objetivo, retornar dados de uma coleção;**
- **Recebemos informações como: banco, collection, horário atual e contagem de registros;**
- **Mas também podemos resgatar dados mais avançados, como: shards, quantidade de executadas e mais;**




#### $sort

- **Operador utilizado para ordenar resultados;**
- **Baseado em algum campo (1: crescente; -1: descrescente;);**



#### $limit

- **Operador utilizado para limitar o número de resultados retornados;**
- **Passamos um parâmetro com o número que indica o limite;**



#### $match

- **Utilizado para determinarmos um filtro para os resultados;**



#### $out

- **Nos permite a criação de uma coleção, a partir da `aggregation` (o retorno da agregação, será inserido em uma nova coleção, que irá conter somente os dados filtrados);**



#### $project

- **Opção utilizada para resgatar apenas os campos que precisamos/queremos com o `aggregation`;**

  


#### $sample

- **Retorna uma amostragem aleatória, definida por uma quantidade no operador;**

  


#### $skip

- **Pula um determinado número de dados (registros);**

  


#### $unwind

- **Desconstrói um array;**
- **Permite trabalhar com o resultado de cada item do array desconstruído (cada item do array se torna um item no retorno da "query");**



#### $sortByCount

- **Ordena os resultados por um campo específico (se trouxermos os dados em grupos, podemos resgatar número de ocorrências de cada grupo);**



#### $unset

- **Remove um/mais campos do retorno da nossa `aggregation`;**
- **Se for apenas um campo, basta inserirmos o valor como string e, se tivermos vários campos, organizamos os campos dentro de um array;**



#### Count em aggregation

- **Parar inserirmos o `count` em uma `aggregation`, precisamos adicionar mais um passo (implementá-lo na nossa pipeline): **

  **`{ $count: "campo_a_ser_criado" }`;**

  - **Assim a `aggregation` retornará apenas a contagem de dados;**