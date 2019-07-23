const router = require('express').Router();
const logController = require('../../controllers/logs');

router.route('/get/all').get(logController.showAll);
router.route('/create').post(logController.postLog);


module.exports = router;
