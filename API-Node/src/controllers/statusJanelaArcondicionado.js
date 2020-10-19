const StatusJanelaArcondicionado = require('../services/statusJanelaArcondicionado');

async function getAll(request, response) {
    return await StatusJanelaArcondicionado
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

    return await StatusJanelaArcondicionado
        .get(id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function set(request, response) {
    let statusJanelaArcondicionado = request.body;

    return await StatusJanelaArcondicionado
        .set(statusJanelaArcondicionado)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function update(request, response) {
    let id = request.params.id;
    let statusJanelaArcondicionado = request.body;

    return await StatusJanelaArcondicionado
        .update(id, statusJanelaArcondicionado)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send({message: result ? "success" : "error"});
        });
}

async function erase(request, response) {
    let id = request.params.id;

    return await StatusJanelaArcondicionado
        .erase(id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send({message: result === 1 ? "success" : "error"});
        });
}

module.exports = { getAll, get, set, update, erase };