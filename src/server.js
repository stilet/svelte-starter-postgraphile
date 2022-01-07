import { handler } from '../build/handler.js';
import * as middleware from "./middleware"

import express from 'express';

const app = express();

middleware.installLogging(app)

app.use(handler);

var host = process.env.HOST;
var port = process.env.PORT;

app.listen({host, port}, () => {
  console.log('Listening on ${host + ":" + port}');
});