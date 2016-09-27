import kRouter from 'koa-router';

import todos  from './todos/api';

const router = new kRouter();

router.use('/api/v1', todos.routes(), todos.allowedMethods());

export default router;
