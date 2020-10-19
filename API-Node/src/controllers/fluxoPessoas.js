const FluxoPessoas = require('../services/fluxoPessoas');

async function getAll(request, response) {
    return await FluxoPessoas
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

    return await FluxoPessoas
        .get(id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function set(request, response) {
    let fluxoPessoas = request.body;

    return await FluxoPessoas
        .set(fluxoPessoas)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function update(request, response) {
    let id = request.params.id;
    let fluxoPessoas = request.body;

    return await FluxoPessoas
        .update(id, fluxoPessoas)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send({message: result ? "success" : "error"});
        });
}

async function erase(request, response) {
    let id = request.params.id;

    return await FluxoPessoas
        .erase(id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send({message: result === 1 ? "success" : "error"});
        });
}

module.exports = { getAll, get, set, update, erase };