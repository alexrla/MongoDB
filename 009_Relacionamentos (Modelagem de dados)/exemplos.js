// EMBEDDED DOCUMENTS

// Embedded documents - One to One
db.pessoas.insertOne({
    nome: "Alex",
    idade: 22,
    endereco: {
        rua: "...",
        numero: "...",
        complemento: "..."
    }
})

// Embedded documents - One to Many
db.enderecos.insertOne({
    nome: "Alex",
    idade: 22,
    enderecos: {
        casa: {
            ruas: "...",
            numero: "...",
            complemento: "..."
        },
        casa_da_mae: {
            ruas: "...",
            numero: "...",
            complemento: "..."
        },
        endereco_3: "...",
        endereco_4: "...",
        endereco_N: "..."
    }
})

// ONE TO ONE
db.pessoas.insertOne({
    nome:"Theo",
    idade: 1,
    profissao: "..."
})

const theo = db.pessoas.findOne({ nome: "Theo" })

db.enderecos.insertOne({
    rua: "...",
    numero: "...",
    complemento: "...",
    pessoa_id: theo._id,
})

// ONE TO MANY
db.pessoas.insertOne({
    nome: "Leandro",
    idade: 30,
    profissao: "..."
})

const leandro = db.pessoas.findOne({ nome: "Leandro"})
const leandroId = leandro._id

db.compras.insertMany([
    { produtos: [ "compra_1", "compra_2", "..." ], pessoa_id: leandroId, pessoa_nome: leandro.nome },
    { produtos: [ "compra_1", "compra_2", "..." ], pessoa_id: leandroId, pessoa_nome: leandro.nome }
])


// MANY TO MANY
db.cursos.insertMany([
    { nome: "PHP Avançado"},
    { nome: "JavaScript Básico" },
    { nome: "Banco de dados NoSQL" }
])

const php = db.cursos.findOne({ nome: "PHP Avançado" })
const javascript = db.cursos.findOne({ nome: "JavaScript Básico" })
const nosql = db.cursos.findOne({ nome: "Banco de dados NoSQL" })

db.alunos.insertMany([
    { nome: "Alex" },
    { nome: "Leandro" },
    { nome: "Theo" },
    { nome: "Vandete" },
])

const xella = db.alunos.findOne({ nome: "Alex" })
const leo = db.alunos.findOne({ nome: "Leandro" })
const teteo = db.alunos.findOne({ nome: "Theo" })
const vanda = db.alunos.findOne({ nome: "Vandete" })

db.aluno_curso.insertMany([
    {
        curso_id: php._id,
        pessoa_id: xella._id
    },
    {
        curso_id: javascript._id,
        pessoa_id: xella._id
    },
    {
        curso_id: php._id,
        pessoa_id: leo._id
    },
])

// Pegando os alunos que fazem o curso "PHP Avançado"
const idAlunosPHP = []

db.aluno_curso.find({ curso_id: php._id }).forEach(function(aluno) {
    idAlunosPHP.push(aluno.pessoa_id)
})

db.alunos2.find({ _id: { $in: idAlunosPHP }}) 