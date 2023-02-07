const express = require('express');
const router = express.Router();

//ISSO É DO LOGIN
const passport = require('../config/passport')
const bloqueio = require('../config/bloqueio');
//ISSO É DO LOGIN

const controller = require('../controller/controller')

//abrir a tela de login
router.get('/', controller.abrirlogin)

//ISSO É DO LOGIN
//logar
router.post('/', passport.authenticate('local', {
    successRedirect: '/inicial',
    failureRedirect: '/registrar',
}))
//ISSO É DO LOGIN

//abrir tela de registro
router.get('/registrar', controller.abrirregistro)

//registrar
router.post('/registrar', controller.registrar)

//ISSO É DO LOGIN
//rota inicial que será acessada apenas se estiver logado
router.get('/inicial', bloqueio, controller.inicial)
//ISSO É DO LOGIN

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = router