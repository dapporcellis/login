const Usuario = require("../model/Usuario")

async function abrirlogin(req, res){
    res.render('login')
}

async function logar(req, res){
    
}

async function abrirregistro(req, res){
    res.render('registrar')
}

async function registrar(req, res){
    console.log(req.body)
    await Usuario.create(req.body)
    res.redirect('/')
}

async function inicial(req, res){
    res.render('inicial',{nome:req.user.nome})
}

module.exports = {
    abrirlogin,
    logar,
    abrirregistro,
    registrar,
    inicial,
}