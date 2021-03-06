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
  '/cart': {
    view: 'cart'
  },


  'get /news/:page': {
    controller: 'news',
    action: 'page'
  },


  'post /news/create': {
    controller: 'news',
    action: 'create'
  },

  'get /news/delete/:id': {
    controller: 'news',
    action: 'delete'
  },

  'post /news/update': {
    controller: 'news',
    action: 'update'
  },
  'get /track/:page': {
    controller: 'track',
    action: 'page'
  },


  ' /track/create': {
    controller: 'track',
    action: 'create'
  },

  'get /track/delete/:id': {
    controller: 'track',
    action: 'delete'
  },

  ' /track/update': {
    controller: 'track',
    action: 'update'
  }

};
