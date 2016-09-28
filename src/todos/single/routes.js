import kRouter  from 'koa-router';

//  Route Handlers
import fetch   from './fetch';
import update  from './update';

const router = new kRouter();

router.get('/', fetch);
router.put('/', update);

export default router;
