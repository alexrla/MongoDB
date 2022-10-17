// Listando índices de um banco

// Vai ser executado em cada uma das coleções
db.getCollectionNames().forEach(function(collection) {

    // Pegando os índices de cada coleção do banco
    indexes = db[collection].getIndexes()

    print("Índices de " + collection + ": ")

    // Os resultados virão em json
    printjson(indexes)

})

// Sem comentários
db.getCollectionNames().forEach(function(collection) {
    indexes = db[collection].getIndexes()
    print("Índices de " + collection + ": ")
    printjson(indexes)
})