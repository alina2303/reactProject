'use strict'

const Archetype = require('archetype-js')
const Wish = require('../lib/wish')
const Tracker = require('../lib/tracker')
const { ObjectId } = require('mongodb')
const express = require('express')
module.exports = db => {
  const router = express.Router()

    // Wrap an async function so we catch any errors that might occur
  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))
 
    // Get all wishes
  router.get('/', wrapAsync(async function(req) {
    return db.collection('Wish').find().sort({ createdAt: -1 }).toArray()
  }))

  // Add a new wish
  router.post('/', wrapAsync(async function(req) {
    const wish = new Wish(req.body)
    await db.collection('Wish').insertOne(wish)
    return { wish }
  }))

  // Delete an existing Wish
  router.delete('/:id', wrapAsync(async function(req) {
    const { result } = await db.collection('Wish').deleteOne({
      _id: Archetype.to(req.params.id, ObjectId)
    })
    return { result }
  }))

  //Add Tracker data
  router.post('/', wrapAsync(async function(req) {
    const tracker = new Tracker(req.body)
    await db.collection('Tracker').insertOne(tracker)
    return { tracker }
  }))

  return router
}