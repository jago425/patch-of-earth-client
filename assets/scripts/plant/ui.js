// const api = require('./api')
// const authUi = require('../authentication/ui')

const createPlantSuccess = function () {
  console.log('create plant worked')
  $('#addPlantModal').modal('toggle')
  $('#status-message').text('Your plant has been added!')
  $('.plant-input').val('')
  // $('#list-form').get(0).reset()
  // api.getList()
  //   .then(authUi.onGetListSuccess)
  //   .catch(authUi.onGetListFailure)
  // $('#status-message').text('')
}

const createPlantFailure = function () {
  $('#status-message').text("something's not right")
}

module.exports = {
  createPlantSuccess,
  createPlantFailure
}
