var passport = require('passport');
var LocalStrategy = require('passport-local');
const Usuario = require('../model/Usuario');

passport.use(new LocalStrategy(async function verify(username, password, cb) {

    const usuario = await Usuario.findOne({
        email: username
    })

    if (!usuario) {
        console.log('usuario')
        return cb(null, false, {
            message: 'Usuário não encontrado!'
        });
    } else {
        if (usuario.senha != password) {
            console.log(usuario.senha)
            return cb(null, false, {
                message: 'Senha incorreta!'
            });
        } else {
            console.log('ok')
            return cb(null, usuario);
        }
    }
}));

passport.serializeUser(function (usuario, cb) {
    process.nextTick(function () {
        cb(null, {
            id: usuario._id,
            email: usuario.email,
            nome: usuario.nome,
            foto: usuario.foto,
        });
    });
});

passport.deserializeUser(function (usuario, cb) {
    process.nextTick(function () {
        return cb(null, usuario);
    });
});

module.exports = passport