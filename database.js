const Sequelize = require('sequelize');

const sequelize = new Sequelize('GeneralStore', 'root', '218priya', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;