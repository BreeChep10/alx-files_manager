import express from 'express';
import injectRoutes from './routes';
import startServer from './libs/boot';
import injectMiddlewares from './libs/middlewares';

const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
