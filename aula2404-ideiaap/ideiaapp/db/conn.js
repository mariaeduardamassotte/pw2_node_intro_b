const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ideias', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectado com sucesso ao MySQL Xampp!')    
} catch (error) {
    console.error(`Deu erro na conexão: ${error}`)
}

module.export = sequelize