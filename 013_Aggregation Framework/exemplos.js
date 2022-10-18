// $bucket
db.nome_da_coleção.aggregate([
    {
        $bucket: {
            // Criação de grupos/segmentos (agrupar por)
            groupBy: "$campo",

            //grupos
            boundaries: [
                grupo_1, grupo_2, grupo_3, ..., grupo_N
            ],

            // Argumento necessário (grupo onde os valores definidos não se encaixam)
            default: "OUTROS",

            // O que será entregue quando os grupos forem encontrados
            output: {
                "alguma_ação": { operação }
            }
        }
    }
])

db.books.aggregate([
    {
        $bucket: {
            groupBy: "$pageCount",
            boundaries: [
                100, 200, 300, 400, 500, 600, 700
            ],
            default: "OTHERS",
            output: {
                "count": {
                    $sum: 1
                }
            }
        }
    }
])

// $bucketAuto
db.nome_da_coleção.aggregate([
    {
        $bucket: {
            groupBy: "$campo",

            // Quantidades de buckets no campo
            buckets: valor,
        }
    }
])

db.books.aggregate([
    {
        $bucketAuto: {
            groupBy: "$categories",
            buckets: 3,
        }
    }
])

// Podemos utilizar em junção com o pretty()
db.books.aggregate([
    {
        $bucketAuto: {
            groupBy: "$categories",
            buckets: 3,
        }
    }
]).pretty()

// $collStatus
db.nome_da_coleção.aggregate([
    {
        $collStats: {
            queryExecStats: {},
            count: {}
        }
    }
]).pretty()

db.books.aggregate([
    {
        $collStats: {
            queryExecStats: {},
            count: {}
        }
    }
]).pretty()

// $sort
db.nome_da_coleção.aggregate([
    {
        $sort: {
            campo: -1
        }
    }
]).pretty()

db.books.aggregate([
    {
        $sort: {
            pageCount: -1
        }
    }
]).pretty()

// $limit
db.nome_da_coleção.aggregate([
    {
        $limit: valor
    }
])

db.books.aggregate([
    {
        $sort: {
            pageCount: -1
        },
    },
    {
        $limit: { campo: filtro }
    }
]).pretty()

// $match
db.nome_da_coleção.aggregate([
    {
        $match: valor
    }
])

db.books.aggregate([
    {
        $sort: {
            pageCount: -1
        },
    },
    {
        $match: { authors: "Gavin King" }
    },
    {
        $limit: 3
    }
]).pretty()

// $out
// As ordens dos operadores de pipeline, não importa
db.nome_da_coleção.aggregate([
    {
        $out: nome_da_nova_coleção
    }
])

db.books.aggregate([
    {
        $match: { categories: "Java", pageCount: { $gt: 800 } }
    },
    {
        $limit: 5
    },
    {
        $out: "bigJavaBooks"
    }
])

// $project
db.nome_da_coleção.aggregate([
    {
        $project: { campo_1: 1, campo_2: 1, ..., campo_N: 1 }
    }
])

db.books.aggregate([
    {
        $match: { authors: "Gavin King" }
    },
    {
        $sort: { pageCount: -1 }
    },
    {
        $limit: 3
    },
    {
        $project: { title: 1, pageCount: 1 }
    }
]).pretty()

// $sample
db.nome_da_coleção.aggregate([
    {
        $sample: { size: valor }
    }
])

db.books.aggregate([
    {
        $match: { categories: "Java" }
    },
    {
        $sort: { pageCount: -1 }
    },
    {
        $project: { title: 1, authors: 1 }
    },
    {
        $sample: { size: 10 }
    }
]).pretty()

// $skip
db.nome_da_coleção.aggregate([
    {
        $skip: valor
    }
])

db.books.aggregate([
    {
        $match: { categories: "Microsoft" }
    },
    {
        $sort: { pageCount: -1 }
    },
    {
        $project: { title: 1, pageCount: 1 }
    },
    {
        $skip: 2
    },
    {
        $limit: 2
    }
]).pretty()

// $unwind
db.nome_da_coleção.aggregate([
    {
        $unwind: "$campo"
    }
])

db.books.aggregate([
    {
        $unwind: "$categories"
    },
    {
        $project: { categories: 1}
    }
]).pretty()

// $sortByCount
db.nome_da_coleção.aggregate([
    {
        $sortByCount: "$campo"
    }
])

db.books.aggregate([
    {
        $unwind: "$categories"
    },
    {
        $sortByCount: "$categories"
    }
]).pretty()

// $unset
db.nome_da_coleção.aggregate([
    {
        $unset: "campo"
    }
])

db.books.aggregate([
    {
        $match: { categories: "PowerBuilder"}
    },
    {
        $sort: { pageCount: -1 }
    },
    {
        $unset: [
            "thumbnailUrl",
            "longDescription"
        ]
    }
]).pretty()

// $count
db.nome_da_coleção.aggregate([
    {
        $count: "nome_do_campo_a_ser_criado"
    }
])

db.books.aggregate([
    {
        $match: { categories: "Java"}
    },
    {
        $count: "Contagem"
    },
])

db.books.aggregate([
    {
        $match: { categories: "Java", pageCount: { $gt: 950 }}
    },
    {
        $count: "Contagem"
    },
])