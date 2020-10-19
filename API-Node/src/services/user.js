const User = require('../queries/user');

async function getAllUsers() {
    var users = await User.getAllUsers();

    if (!users) {
        return {
            status: 400,
            message: 'Erro ao buscar os Usuários'
        };
    }

    return users;
}

async function getUser(id) {
    var user = await User.getUser(id);

    if (!user) {
        return {
            status: 400,
            message: 'Erro: usuario não encontrado'
        };
    }

    return user;
}

async function setUser(usr) {
    var user = await User.setUser(usr);

    if (!user) {
        return {
            status: 400,
            message: 'Erro: ao inserir a user ' + usr.nome
        };
    }

    return user;
}

async function updateUser(id, usr) {
    var user = await User.updateUser(id, usr);

    if (!user) {
        return {
            status: 400,
            message: 'Erro: User não encontrada'
        };
    }

    return user;
}

async function deleteUser(id) {
    var user = await User.deleteUser(id);

    if (!user) {
        return {
            status: 400,
            message: 'Erro: User não encontrada'
        };
    }

    return user;
}

module.exports = { getAllUsers, getUser, setUser, updateUser, deleteUser };