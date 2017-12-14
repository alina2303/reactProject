'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  days: {
    $type: 'int',
    $required: false
  },
  startHour: {
    $type: 'int',
    $required: false
  },
  endHour: {
    $type: 'int',
    $required: false
  },
  rate: {
      $type: 'int',
      $required: false
  }
}).compile('Tracker')