/**
 * Route Mappings
 *
 */

module.exports.routes = {

  '/': {
    view: 'homepage'
  },

  '/login': 'SessionController',
  '/register': 'UserController',

  '/logout': {
    controller: 'session',
    action: 'destroy'
  },



  'get /post/:page': {
    controller: 'post',
    action: 'page'
  },


  'post /post/create': {
    controller: 'post',
    action: 'create'
  },

  'get /post/delete/:id': {
    controller: 'post',
    action: 'delete'
  },

  'post /post/update': {
    controller: 'post',
    action: 'update'
  }

};
