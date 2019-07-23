const router = require('express').Router();
const users = require('./users');
const routines = require('./routines');
const tasks = require('./tasks');
const logs = require('./logs');

router.use('/users', users);
router.use('/routines', routines);
router.use('/logs', logs);
module.exports = router;
 