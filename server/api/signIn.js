const crypto = require('crypto');

const connector = require('../api/configeration');
let i = 10000;
let len = 64;
let digest = 'sha512';
let salt = 'realtore';


const signIn = (name, lastname, email, password) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, i, len, digest, (error, key) => {
            if (error) throw error;
            connector.query(`insert into users(role_id,first_name,last_name,password,email) values(?,?,?,?,?)`
                , [2, name, lastname, key.toString('hex'), email],
                (error, result, field) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result.insertId);
                });
        });
    });
}

module.exports = {
    signIn
}