const db = require('../models/index');


module.exports = {

    showAll: function (req, res) {
        console.log("API/");
        db.Routine.findAll({})
            .then(dbRoutines => res.json(dbRoutines))
            .catch(err => console.log(err));
    },
    getRoutineById: function (req, res) {
        console.log(req.params);
        db.Routine.findAll({
            Routinename: req.params.id
        })
            .then(dbRoutine => res.json(dbRoutine))
            .catch(err => console.log(err));
    },

    postRoutine: function (req, res) {
        db.Routine.findOne({where:req.body}).then(RoutineExists=>{

            console.log(JSON.stringify(RoutineExists, null, 2));
            if (!RoutineExists) {
                db.Routine.create(req.body)
                .then(dbRoutine => res.json(dbRoutine))
                .catch(err => err);
            }
        });
    },
}

