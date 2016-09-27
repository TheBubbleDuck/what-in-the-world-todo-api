import koa     from 'koa';
import json    from 'koa-json';

//  Custom Imports
import api     from './api';

//  Setup Base
const PORT = process.env.PORT || 3000;
const app = koa();

//  Middleware
app.use(json());
app.use(api.routes());

app.listen(PORT);


//TODO: Look into better way to handle the routes boilerplate
