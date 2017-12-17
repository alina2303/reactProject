'use strict'

const Archetype = require('archetype-js')

const tracker = new Archetype({
  days: {
    $type: 'string',
    $required: false
  },
  startHour: {
    $type: 'string',
    $required: false
  },
  endHour: {
    $type: 'string',
    $required: false
  },
  rate: {
      $type: 'string',
      $required: false
  }
}).compile('tracker')

const test = new tracker({
  days: '900',
  rate: '900'
});

test.days; // number of days
test.rate; // rate
