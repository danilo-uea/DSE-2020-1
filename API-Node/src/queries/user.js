const User = require('../models/user');

async function getUser(id) {
    return await User.findOne({
        where: {
            id: id
        }
    });
}

async function getAllUsers() {
    return await User.findAll();
}

async function setUser(user) {
    return await User.create(user);
}

async function updateUser(id, user) {
    return await User.update(user, { 
        where: { 
            id: id 
        } 
    });
}

async function deleteUser(id) {
    return await User.destroy({ 
        where: { 
            id: id 
        } 
    });
}

module.exports = { getUser, getAllUsers, setUser, updateUser, deleteUser };