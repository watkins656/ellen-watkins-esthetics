const router = require('express').Router();
const routineController = require('../../controllers/routines');

router.route('/get/all').get(routineController.showAll);
router.route('/create').post(routineController.postRoutine);


module.exports = router;
