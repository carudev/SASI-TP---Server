//index, show, store->criar sessão, update, destroy

const User = require('../models/User');

module.exports = { 
    async Store(req, res) { 

        const { nome }  = req.body;
        const { sobrenome }  = req.body;
        const { email }  = req.body;
        const { card }  = req.body;
        const { cardPassword }  = req.body;
        const { password }  = req.body;
        const { passwordConfirm }  = req.body;

        let user = await User.findOne({ email });

        if ( !user ) {
            user = await User.create({  nome, sobrenome, email, card, cardPassword, password, passwordConfirm });
        }

   return res.json(user);
    }
};      