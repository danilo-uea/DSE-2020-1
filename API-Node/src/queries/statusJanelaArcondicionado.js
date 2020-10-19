const StatusJanelaArcondicionado = require('../models/statusJanelaArcondicionado');

async function get(id) {
    return await StatusJanelaArcondicionado.findOne({
        where: {
            id: id
        }
    });
}

async function getAll() {
    return await StatusJanelaArcondicionado.findAll();
}

async function set(historico) {
    return await StatusJanelaArcondicionado.create(historico);
}

async function update(id, historico) {
    return await StatusJanelaArcondicionado.update(historico, { 
        where: { 
            id: id 
        } 
    });
}

async function erase(id) {
    return await StatusJanelaArcondicionado.destroy({ 
        where: { 
            id: id 
        } 
    });
}

module.exports = { get, getAll, set, update, erase };