'use strict'
const config = require('../config')
const store = require('../store')

const createNewPlant = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/plants',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// const getPlants = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/plants',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const showPlant = function (plantId) {
//   return $.ajax({
//     url: config.apiOrigin + '/plants/' + plantId,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const updatePlant = function (plantId, data) {
//   // console.log('ajax', listId, data)
//   return $.ajax({
//     url: config.apiOrigin + '/plants/' + plantId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }
//
// const deletePlant = function (plantId) {
//   // console.log(listId)
//   return $.ajax({
//     url: config.apiOrigin + '/plants/' + plantId,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  createNewPlant
  // getPlants,
  // showPlant,
  // updatePlant,
  // deletePlant
}
