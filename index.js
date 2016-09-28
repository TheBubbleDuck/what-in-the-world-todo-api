//  Import polyfill for async/await

import koa    from 'koa';
import json   from 'koa-json';
import parser from 'koa-bodyparser';
//  Custom Imports
import api     from './api';
import './db/setup';

//  Setup Base
const PORT = process.env.PORT || 3000;
const app = koa();

//  Middleware
app.use(parser());
app.use(json());
app.use(api.routes());

app.listen(PORT);


//TODO: Look into better way to handle the routes boilerplate
