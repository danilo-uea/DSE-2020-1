const FluxoPessoas = require('../models/fluxoPessoas');

async function get(id) {
    return await FluxoPessoas.findOne({
        where: {
            id: id
        }
    });
}

async function getAll() {
    return await FluxoPessoas.findAll();
}

async function set(fluxo) {
    return await FluxoPessoas.create(fluxo);
}

async function update(id, fluxo) {
    return await FluxoPessoas.update(fluxo, { 
        where: { 
            id: id 
        } 
    });
}

async function erase(id) {
    return await FluxoPessoas.destroy({ 
        where: { 
            id: id 
        } 
    });
}

module.exports = { get, getAll, set, update, erase };