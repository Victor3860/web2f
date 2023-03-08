const sequelize = require("sequelize")
const sequelize = new sequelize("exemplo","root","",{
    host:"localhost",
    dialect: "mysql"
})
sequelize.authenticate(). then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("Falha" + erro)
})

Sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})
const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereço:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    },
})
Agendamentos.sync({force: true})

Agendamentos.create({
    nome: "Jeferson robertp de lima",
    endereco: "Av. aguia de haia",
    bairro:"Arthur alvin",
    cep:54654474,
    cidade: "sÃO PAULO",
    estado: "São paulo",
    observacao:"...."
})