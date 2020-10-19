const HistoricoTemperatura = require('../models/historicoTemperatura');

async function get(id) {
    return await HistoricoTemperatura.findOne({
        where: {
            id: id
        }
    });
}

async function getAll() {
    return await HistoricoTemperatura.findAll();
}

async function set(historico) {
    return await HistoricoTemperatura.create(historico);
}

async function update(id, historico) {
    return await HistoricoTemperatura.update(historico, { 
        where: { 
            id: id 
        } 
    });
}

async function erase(id) {
    return await HistoricoTemperatura.destroy({ 
        where: { 
            id: id 
        } 
    });
}

module.exports = { get, getAll, set, update, erase };