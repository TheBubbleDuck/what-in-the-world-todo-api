import kRouter  from 'koa-router';

//  Router Handlers
import fetch   from './fetch';
import create  from './create';

const router = new kRouter();

router.get('/', fetch);
router.post('/', create);

export default router;
