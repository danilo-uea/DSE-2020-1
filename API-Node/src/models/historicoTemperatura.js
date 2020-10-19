const Sequelize = require('sequelize');
const mysqlConnection = require('../config/database');

const HistoricoTemperatura = mysqlConnection.define(
    'historico_temperatura',
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
        },
        temperatura:{
            type: Sequelize.FLOAT
        }
    },
    {
        tableName: 'historico_temperatura',
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = HistoricoTemperatura;