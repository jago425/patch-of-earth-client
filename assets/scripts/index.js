'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./authentication/events')
const plantEvents = require('./plant/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.onPageLoad()
})

$(() => {
  authEvents.addHandlers()
})

$(() => {
  plantEvents.plantHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
