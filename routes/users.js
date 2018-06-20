const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();
const { validateBody, schemas } = require('../helpers/routeHelpers');

const usersController = require('../controller/users');

router.route('/signUp')
    .post(validateBody(schemas.authSchema), usersController.signUp);

router.route('/signIn')
    .post(usersController.signIn);

router.route('/secret')
    .get(usersController.secret);

router.route('/get')
    .get(usersController.getUsers);


module.exports = router;