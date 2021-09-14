import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';
import dotenv from 'dotenv';
import { CommonRoutesConfig } from './src/routes/common.routes.config';
import { DrinkRoutes } from './src/routes/drink.routes';
import errorMiddleware from './src/middleware/error.middleware';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ],
};

if (process.env.NODE_ENV == "PRODUCTION") {
    loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new DrinkRoutes(app));
app.use(errorMiddleware)

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send("Vending Machine")
});

server.listen(process.env.PORT, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(`Server started at port: ${process.env.PORT}`);
});