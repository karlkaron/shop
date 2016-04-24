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
  }

};
