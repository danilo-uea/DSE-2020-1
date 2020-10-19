const HistoricoTemperatura = require('../queries/historicoTemperatura');

async function getAll() {
    var historicoTemperatura = await HistoricoTemperatura.getAll();

    if (!historicoTemperatura) {
        return {
            status: 400,
            message: 'Erro ao buscar os Usuários'
        };
    }

    return historicoTemperatura;
}

async function get(id) {
    var historicoTemperatura = await HistoricoTemperatura.get(id);

    if (!historicoTemperatura) {
        return {
            status: 400,
            message: 'Erro: usuario não encontrado'
        };
    }

    return historicoTemperatura;
}

async function set(temp) {
    var historicoTemperatura = await HistoricoTemperatura.set(temp);

    if (!historicoTemperatura) {
        return {
            status: 400,
            message: 'Erro: ao inserir a historicoTemperatura '
        };
    }

    return historicoTemperatura;
}

async function update(id, historicoTemperatura) {
    var temp = await HistoricoTemperatura.update(id, historicoTemperatura);

    if (!temp) {
        return {
            status: 400,
            message: 'Erro: temp não encontrada'
        };
    }

    return temp;
}

async function erase(id) {
    var historicoTemperatura = await HistoricoTemperatura.erase(id);

    if (!historicoTemperatura) {
        return {
            status: 400,
            message: 'Erro: historicoTemperatura não encontrada'
        };
    }

    return historicoTemperatura;
}

module.exports = { getAll, get, set, update, erase };