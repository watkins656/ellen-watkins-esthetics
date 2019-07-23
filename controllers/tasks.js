const db = require('../models/index');


module.exports = {

    showAll: function (req, res) {
        console.log("API/");
        db.Task.findAll({})
            .then(dbTask => res.json(dbTask))
            .catch(err => console.log(err));
    },
    getTaskById: function (req, res) {
        console.log(req.params);
        db.Task.findAll({
            task: req.params.id
        })
            .then(dbTask => res.json(dbTask))
            .catch(err => console.log(err));
    },

    postTask: function (req, res) {
        db.Task.findOne({where:{"name":req.body.name}}).then(taskExists=>{

            console.log(JSON.stringify(taskExists, null, 2));
            if (!taskExists) {
                db.Task.create(req.body)
                .then(dbTask => res.json(dbTask))
                .catch(err => err);
            }
            else res.send("Task Already Exists")
        });
    },
}

