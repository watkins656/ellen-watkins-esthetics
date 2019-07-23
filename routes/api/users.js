const router = require('express').Router();
const userController = require('../../controllers/users');

router.route('/get/all').get(userController.showAll);
router.route('/create').post(userController.postUser);


module.exports = router;
