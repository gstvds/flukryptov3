import { Router } from 'express';

const ApiController = require('./controllers/api.controller');

const routes = Router();

routes.get('/getData', ApiController.index)

export default routes;