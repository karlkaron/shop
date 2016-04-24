/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      maxLength: 120,
      required: true
    },
    infotext: {
      type: 'string',
      required: true
    },
    content: {
      type: 'string',
      required: true
    },
    autor: {
      type: 'string',
      maxLength: 120,
      required: true
    },
    date: {
      type: 'string',
      required: true
    }
  }
};
