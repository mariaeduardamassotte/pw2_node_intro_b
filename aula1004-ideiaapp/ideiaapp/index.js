const express =  require('express')//capta url, aciona comandos dentro do Node
const exphbs = require('express-handlebars')//Monta html no navegador
const session = requir ('express-session')//seção de login
const FileStore = require('session-file-store')(session)//manipula arquivos do back para o Mysql
const flash = require('express-flash')//Lida com a memoria Ram do computador