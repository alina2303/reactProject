'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  createdAt: {
    $type: Date,
    $default: new Date()
  },
  title: {
    $type: 'string',
    $required: true
  },
  user: {
    $type: 'string',
    $required: true
  },
  price: {
    $type: 'int',
    $required: true
  }
}).compile('Wish')