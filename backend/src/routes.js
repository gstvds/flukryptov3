import { Router } from 'express';

const ApiController = require('./controllers/api.controller');

const routes = Router();

routes.post('/getData', ApiController.index)

export default routes;