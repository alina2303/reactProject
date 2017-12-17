'use strict'

const Archetype = require('archetype-js')

const wish = new Archetype({
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

const test = new wish({
  createdAt: 'Date',
  title: 'TestWish',
  user: 'TestUser',
  price: '1000'
});

test.createdAt;
test.title; 
test.user;
test.price;