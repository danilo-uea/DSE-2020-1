const HistoricoTemperatura = require('../services/historicoTemperatura');

async function getAll(request, response) {
    return await HistoricoTemperatura
        .getAll()
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function get(request, response) {
    let id = request.params.id;

    return await HistoricoTemperatura
        .get(id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function set(request, response) {
    let historicoTemperatura = request.body;

    return await HistoricoTemperatura
        .set(historicoTemperatura)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function update(request, response) {
    let id = request.params.id;
    let historicoTemperatura = request.body;

    return await HistoricoTemperatura
        .update(id, historicoTemperatura)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send({message: result ? "success" : "error"});
        });
}

async function erase(request, response) {
    let id = request.params.id;

    return await HistoricoTemperatura
        .erase(id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send({message: result === 1 ? "success" : "error"});
        });
}

module.exports = { getAll, get, set, update, erase };