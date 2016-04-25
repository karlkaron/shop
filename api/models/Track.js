/**
 * Track.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    infotext: {
      type: 'string',
      required: true
    },
    linkD: {
      type: 'string',
      required: true
    },
    linkDshort: {
      type: 'string'
    },
    interpret: {
      type: 'string'
    },
    cover: {
      type: 'string'
    },
    price: {
      type: 'string'

    }
  }
};
