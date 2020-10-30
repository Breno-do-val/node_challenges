const xlsx = require('node-xlsx');

const User  = require('../model/user');

module.exports = {

    async index(req, res) {

        const userData = await  xlsx.parse(__dirname + '/database.xlsx');
        const result = userData[0].data;

        const users = result.map(item => {
            
            let user  = new User(item[0], item[1], item[2]);

            return user;
        })

        return res.json({
            users
        })
    }
}