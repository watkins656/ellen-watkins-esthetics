const router = require('express').Router();
const taskController = require('../../controllers/tasks');

router.route('/get/all').get(taskController.showAll);
router.route('/create').post(taskController.postTask);


module.exports = router;
