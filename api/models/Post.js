/**
 * Post.js
 *

 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      maxLength: 120,
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    content: {
      type: 'string',
      required: true
    }

  }
};
