const db = require('../models/index');


module.exports = {

    showAll: function (req, res) {
        console.log("API/");
        db.User.findAll({})
            .then(dbUsers => res.json(dbUsers))
            .catch(err => console.log(err));
    },
    getUserById: function (req, res) {
        console.log(req.params);
        db.User.findAll({
            username: req.params.id
        })
            .then(dbUser => res.json(dbUser))
            .catch(err => console.log(err));
    },

    postUser: function (req, res) {
        db.User.findOne({where:req.body}).then(userExists=>{

            console.log(JSON.stringify(userExists, null, 2));
            if (!userExists) {
                db.User.create(req.body)
                .then(dbUser => res.json(dbUser))
                .catch(err => err);
            }
        });
    },
}

