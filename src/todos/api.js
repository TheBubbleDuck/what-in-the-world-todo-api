import kRouter from 'koa-router';

import list     from './list/routes';
import single   from './single/routes';

const router = new kRouter();

//  Use routes
router.use('/todos', list.routes(), list.allowedMethods());
router.use('/todos/:id', single.routes(), single.allowedMethods());

export default router;
