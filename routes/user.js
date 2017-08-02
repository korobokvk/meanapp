const express = require('express');

import * as UserController from '../controllers/user';

const routes = express.Router();

routes.get('/current-user', UserController.getCurrentUser);

export default routes
