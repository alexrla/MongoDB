// Seleção em embedded documents
db.pessoas.insertMany([ 
    { 
        nome: "Matheus", 
        caracteristicas: { 
            peso: "80kg", 
            altura: "1.80m", 
            cor_dos_olhos: "verdes", 
            idade: 30
        } 
    },
    { 
        nome: "Pedro", 
        caracteristicas: { 
            peso: "92kg",
            altura: "1.65m", 
            cor_dos_olhos: "castanhos", 
            idade: 25
        }
    },
    { 
        nome: "Maria", 
        caracteristicas: { 
            peso: "68kg", 
            altura: "1.92m", 
            cor_dos_olhos: "azuis", 
            idade: 33
        } 
    },
    { 
        nome: "Carla", 
        caracteristicas: { 
            peso: "72kg", 
            altura: "1.72m", 
            cor_dos_olhos: "castanhos", 
            idade: 19
        }
    }, 
])

// Encontrando item específico em um array
db.alunos.insertMany([ 
    { 
        nome: "Matheus", 
        matematica: [8, 7, 10, 8] 
    }, 
    { 
        nome: "Pedro", 
        matematica: [8, 8, 9, 7] 
    }, 
    { 
        nome: "Maria", 
        matematica: [6, 4, 10, 9] 
    },
])

// Operador $size
db.alunos.insertOne( 
    { 
        nome: "Josias", 
        matematica: [10, 10] 
    }
)

// Selecionando um array de documentos(documents)
db.produtos.insertMany([ 
    { 
        nome: "Camisa", 
        variacoes: [ 
            { 
                cor: "Vermelha", 
                tamanho: "P", 
                qtd: 10 
            }, 
            { 
                cor: "Azul", 
                tamanho: "M", 
                qtd: 25 
            }, 
            { 
                cor: "Verde", 
                tamanho: "G", 
                qtd: 48 
            }, 
        ] 
    }, 
    { 
        nome: "Calça", 
        variacoes: [ 
            { 
                cor: "Preta", 
                tamanho: 42, 
                qtd: 12 
            }, 
            { 
                cor: "Cinza", 
                tamanho: 46, 
                qtd: 20 
            }, 
            { 
                cor: "Azul", 
                tamanho: 46, 
                qtd: 32 
            } 
        ] 
    }
])