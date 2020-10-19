const Sequelize = require('sequelize');
const mysqlConnection = require('../config/database');

const FluxoPessoas = mysqlConnection.define(
    'fluxo_pessoas',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        qtd_pessoas: {
            type: Sequelize.INTEGER
        },
        data_hora: {
            type: Sequelize.DATE
        }
    },
    {
        tableName: 'fluxo_pessoas',
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = FluxoPessoas;