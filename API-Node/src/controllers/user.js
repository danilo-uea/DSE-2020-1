const User = require('../services/user');

async function getAllUsers(request, response) {
    return await User
        .getAllUsers()
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function getUser(request, response) {
    let id = request.params.id;

    return await User
        .getUser(id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function setUser(request, response) {
    let user = request.body;

    return await User
        .setUser(user)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send(result);
        });
}

async function updateUser(request, response) {
    let id = request.params.id;
    let user = request.body;

    return await User
        .updateUser(id, user)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send({message: result ? "success" : "error"});
        });
}

async function deleteUser(request, response) {
    let id = request.params.id;

    return await User
        .deleteUser(id)
        .catch(error => {
            response.status(error.statusCode || 500).send(error);
        })
        .then(result => {
            return response.status(200).send({message: result === 1 ? "success" : "error"});
        });
}

module.exports = { getAllUsers, getUser, setUser, updateUser, deleteUser };