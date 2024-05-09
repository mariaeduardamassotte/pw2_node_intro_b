const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class UserController{
    static login(req, res){
        res.render('auth/login')
    }
    static register(req, res){
        res.render('auth/register')
    }

    static async registerPost(req, res){
        const { name, email, password, confirmpassword} = req.body

        if(password != confirmpassword){            
            req.flash('message','As senhas não conferem, tente novamente!')
            res.render('auth/register')
            return
        }

        const checkIfUserExists = await User.findOne({ where: { email:email }})

        if(checkIfUserExists){
            req.flash('message', 'O e-mail já esta cadastrado!')
            res.render('auth/login')
            this.login
        }
        //este comando encripta a senha do usuario
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassword
        }

        User.create(user)
        .then((user) => {
            //criando uma seção para o usuario, uma seção aberta que nao vai fechar a cada click que ele der  
            req.sesion.userid = used.userid
            req.flash('message', 'Cadastro realizado com sucesso!')

            req.sesion.save(() => {
                res.redirect('/')
            })
            .catch((err) => console.error(err))
        })
    }
}

//
//Post  pede,
//get entrega, 