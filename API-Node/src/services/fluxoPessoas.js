const FluxoPessoas = require('../queries/fluxoPessoas');

async function getAll() {
    var fluxo = await FluxoPessoas.getAll();

    if (!fluxo) {
        return {
            status: 400,
            message: 'Erro ao buscar os Usuários'
        };
    }

    return fluxo;
}

async function get(id) {
    var fluxo = await FluxoPessoas.get(id);

    if (!fluxo) {
        return {
            status: 400,
            message: 'Erro: usuario não encontrado'
        };
    }

    return fluxo;
}

async function set(Fluxo) {
    var fluxo = await FluxoPessoas.set(Fluxo);

    if (!fluxo) {
        return {
            status: 400,
            message: 'Erro: ao inserir a fluxo '
        };
    }

    return fluxo;
}

async function update(id, fluxo) {
    var fluxoPessoas = await FluxoPessoas.update(id, fluxo);

    if (!fluxoPessoas) {
        return {
            status: 400,
            message: 'Erro: fluxoPessoas não encontrada'
        };
    }

    return fluxoPessoas;
}

async function erase(id) {
    var fluxo = await FluxoPessoas.erase(id);

    if (!fluxo) {
        return {
            status: 400,
            message: 'Erro: fluxo não encontrada'
        };
    }

    return fluxo;
}

module.exports = { getAll, get, set, update, erase };