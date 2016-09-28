import kRouter from 'koa-router';

const router = new kRouter();

//  Use routes
router.get('/', function *() {
  this.body = {
    message: 'Welcome to this api. In order to access it, utilize some of the link paths below',
    todos: {
      list: {
        path: '/api/v1/todos',
        methods: [
          {
            method: 'GET',
            description: 'GET a list of todos'
          },
          {
            method: 'POST',
            description: 'POST a todo and get the new one in response'
          }
        ]
      },
      single: {
        path: '/api/v1/todos/:id',
        methods: [
          {
            method: 'GET',
            description: 'GET a single todo based on the :id param'
          },
          {
            method: 'PUT',
            description: 'UPDATE a todo based on the :id param'
          }
        ]
      }
    }
  };
});

export default router;
