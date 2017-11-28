
const indexPlantsTemplate = require('../templates/helpers/plant-table.handlebars')

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

const getAllPlantsSuccess = function (data) {
  $('#plant-table-data').empty()
  const indexPlants = indexPlantsTemplate({ plants: data.plants })
  $('#plant-table-data').html(indexPlants)
}

const getAllPlantsFailure = function () {
  $('#status-message').text('failed to load your plants')
}
module.exports = {
  createPlantSuccess,
  createPlantFailure,
  getAllPlantsSuccess,
  getAllPlantsFailure
}
