const Sequelize = require('sequelize');
const mysqlConnection = require('../config/database');

const HistoricoTemperatura = mysqlConnection.define(
    'status_janela_arcondicionado',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        janela: {
            type: Sequelize.STRING
        },
        arcondicionado: {
            type: Sequelize.STRING
        },
        data_hora:{
            type: Sequelize.DATE
        }
    },
    {
        tableName: 'status_janela_arcondicionado',
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = HistoricoTemperatura;