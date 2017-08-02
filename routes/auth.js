const express = require('express');
import * as AuthControllers from '../controllers/auth.js'

const router = express.Router();
router.post('/singup', AuthControllers.singup);
router.post('/singin', AuthControllers.singin);

module.exports = router;
