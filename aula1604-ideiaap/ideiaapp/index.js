const express =  require('express')//capta url, aciona comandos dentro do Node
const exphbs = require('express-handlebars')//Monta html no navegador
const session = require ('express-session')//seção de login
const FileStore = require('session-file-store')(session)//manipula arquivos do back para o Mysql
const flash = require('express-flash')//Lida com a memoria Ram do computador

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('layouts/main')
})

app.listen(3000, () => {
    console.log('Servidor operando na porta local: http://127.0.0.1;3000')
})