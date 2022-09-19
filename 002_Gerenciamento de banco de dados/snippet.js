// Loop para remover bancos
Mongo().getDBNames().forEach((db) => {

    if(["admin", "config", "local"].indexOf(db) < 0){

        Mongo().getDB(db).dropDatabase();

    }

});