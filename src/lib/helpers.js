const bcreypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (password) =>{
    const salt = await bcreypt.genSalt(10);
    const hash = await bcreypt.hash(password, salt);
    return hash;
};

helpers.matchPassword = async (password, savedPassword) =>{
    try {
        return await bcreypt.compare(password, savedPassword);
    } catch (error) {
        console.log(error);
    }
}


module.exports = helpers;