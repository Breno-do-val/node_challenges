const db = require('../config/db');
const User = require('../models/User');

module.exports = {
    save: async (req, res) => {

        const user = new User(
            req.body.name, 
            req.body.email,
            req.body.password
            );

        let userExists = await db('users')
            .where(
                {email: req.body.email}
            )
            .first();

        if (userExists) {
            res.status(400)
                .send('User already registered.');
        }

        await db('users').insert({
            name: user.name,
            email: user.email,
            password: user.password
        });

        res.status(201).json(user);
    }
}