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
/*
    Pessoa.insertMany([
        {nome: "Pedro", idade: 40, profissao: "Engenheiro"},
        {nome: "Maria", profissao: "Advogada"},
        {nome: "Rodrigo", idade: 27}
    ]);
*/

// Retornando todos os dados
/*
    const getPessoas = async() => {
        const pessoas = await Pessoa.find({}).exec();
        console.log(pessoas);
    };

    getPessoas();
*/

// Removendo dados
/*
    const getPessoa = async(nome) => {
        const pessoa = await Pessoa.find({ nome: nome }).exec();

        if(pessoa.length === 0) console.log(`A pessoa de nome ${nome}, não existe.`);
        else console.log(pessoa);
    };

    getPessoa("Alex");

    Pessoa.deleteOne({ nome: "Alex" }).exec();

    getPessoa("Alex");
*/

// Atualizando dados
/*
    const getPessoa = async(nome) => {
        const pessoa = await Pessoa.find({ nome: nome }).exec();
        console.log(`Profissão da ${nome}: ${pessoa[0].profissao}`);
    };

    getPessoa("Maria");

    Pessoa.updateOne({ nome: "Maria"}, { profissao: "Juíza" }).exec();

    getPessoa("Maria");
*/

// Where
const getPessoaNomeIdade = async(nome, idade) => {
    const pessoa = await Pessoa
                            .where("idade").gte(idade)
                            .where("nome", nome)
                            .exec();

    if(pessoa.length === 0) console.log("Esta pessoa não existe");
    else console.log(pessoa);
};

getPessoaNomeIdade("Rodrigo", 25);