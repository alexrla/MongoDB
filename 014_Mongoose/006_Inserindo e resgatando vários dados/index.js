// Conectando ao MongoDB
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => console.log("Conectado ao MongoDB!"));

// Criando Schema
const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
});

// Criando um Model
const Pessoa = mongoose.model("Pessoa", pessoaSchema);

const alex = new Pessoa({
    nome: "Alex",
    idade: 21,
    profissao: "Desenvolvedor fullstack"
});

console.log(alex.nome);
console.log(alex.idade);

// Inserindo dados
/*
    alex.save((error) => {
        if(error) console.log(error);
    });
*/

// Retornando dados
/*
    Pessoa.findOne({ nome: "Alex"}, (error, pessoa) => {
        console.log(pessoa);
    });
*/

// Inserindo vários dados
Pessoa.insertMany([
    {nome: "Pedro", idade: 40, profissao: "Engenheiro"},
    {nome: "Maria", profissao: "Advogada"},
    {nome: "Rodrigo", idade: 27}
]);

// Retornando todos os dados
const getPessoas = async() => {
    const pessoas = await Pessoa.find({}).exec();
    console.log(pessoas);
};

getPessoas();