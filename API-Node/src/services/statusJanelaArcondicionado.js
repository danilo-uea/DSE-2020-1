const StatusJanelaArcondicionado = require('../queries/statusJanelaArcondicionado');

async function getAll() {
    var statusJanelaArcondicionado = await StatusJanelaArcondicionado.getAll();

    if (!statusJanelaArcondicionado) {
        return {
            status: 400,
            message: 'Erro ao buscar os Usuários'
        };
    }

    return statusJanelaArcondicionado;
}

async function get(id) {
    var statusJanelaArcondicionado = await StatusJanelaArcondicionado.get(id);

    if (!statusJanelaArcondicionado) {
        return {
            status: 400,
            message: 'Erro: usuario não encontrado'
        };
    }

    return statusJanelaArcondicionado;
}

async function set(temp) {
    var statusJanelaArcondicionado = await StatusJanelaArcondicionado.set(temp);

    if (!statusJanelaArcondicionado) {
        return {
            status: 400,
            message: 'Erro: ao inserir a statusJanelaArcondicionado '
        };
    }

    return statusJanelaArcondicionado;
}

async function update(id, statusJanelaArcondicionado) {
    var temp = await StatusJanelaArcondicionado.update(id, statusJanelaArcondicionado);

    if (!temp) {
        return {
            status: 400,
            message: 'Erro: temp não encontrada'
        };
    }

    return temp;
}

async function erase(id) {
    var statusJanelaArcondicionado = await StatusJanelaArcondicionado.erase(id);

    if (!statusJanelaArcondicionado) {
        return {
            status: 400,
            message: 'Erro: statusJanelaArcondicionado não encontrada'
        };
    }

    return statusJanelaArcondicionado;
}

module.exports = { getAll, get, set, update, erase };