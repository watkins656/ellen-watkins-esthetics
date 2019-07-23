const db = require('../models/index');


module.exports = {

    showAll: function (req, res) {
        console.log("API/");
        db.Log.findAll({})
            .then(dbLog => res.json(dbLog))
            .catch(err => console.log(err));
    },
    getLogById: function (req, res) {
        console.log(req.params);
        db.Log.findAll({
            Routinename: req.params.id
        })
            .then(dbLog => res.json(dbLog))
            .catch(err => console.log(err));
    },

    postLog: function (req, res) {
        db.Log.findOne({where:req.body}).then(LogExists=>{

            console.log(JSON.stringify(LogExists, null, 2));
            if (!LogExists) {
                db.Log.create(req.body)
                .then(dbLog => res.json(dbLog))
                .catch(err => err);
            }
        });
    },
}

