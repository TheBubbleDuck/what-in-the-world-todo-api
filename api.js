import kRouter from 'koa-router';

import todos    from './src/todos/api';
import welcome  from './src/welcome/api';

const router = new kRouter();

router.use('/api/v1', todos.routes(), todos.allowedMethods());
router.use('/', welcome.routes(), welcome.allowedMethods());
export default router;
