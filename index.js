import koa     from 'koa';
import router  from 'koa-route';
import json    from 'koa-json';
const PORT = process.env.PORT || 3000;
const app = koa();

//  Middleware
app.use(json());

//  Mock Todos
const todos = {
  list: function *() {
    this.body = [
      {
        title: 'Willy\'s Todo',
        user: {
          email: 'fishmoo@fishcheesemoo.com',
          name: 'Whacky Willy'
        }
      },
      {
        title: 'Off To The Mines',
        user: {
          email: 'miningguy@fishcheesemoo.com',
          name: 'Mine Guy'
        }
      }
    ];
  }
};

//  Use Router
app.use(
  router.get('/todos', todos.list)
);

app.listen(PORT);
