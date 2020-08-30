import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import { errors as validationErrorsHandler } from 'celebrate';

import createConnection from '@shared/infra/typeorm';
import errorsHandler from '@shared/handlers/errorsHandler';
import '@shared/container';

import routes from './routes';

createConnection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(validationErrorsHandler());
app.use(errorsHandler);

export default app;
