
const indexPlantsTemplate = require('../templates/helpers/plant-table.handlebars')
const showEditPlantsTemplate = require('../templates/helpers/edit-plant.handlebars')
const api = require('./api')

const createPlantSuccess = function () {
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

const showPlantSuccess = function (data) {
  const showPlant = showEditPlantsTemplate(data)
  $('.edit-plant').html(showPlant)
  // $('#modal-item-description').val(data.list_item.item_description)
  // $('#item-id-from-edit-modal').attr('value', data.list_item.id)
  // $('#edit-modal').off('submit')
}

const showPlantFailure = function () {
  $('#status-message').text("something's not right")
}
const updatePlantSuccess = function () {
  $('#editPlantModal').modal('toggle')
  $('#status-message').text('Your plant has been updated!')
  api.getPlants()
    .then(getAllPlantsSuccess)
    .catch(getAllPlantsFailure)
}

const updatePlantFailure = function () {
  $('#status-message').text("something's not right")
}

const deletePlantSuccess = function () {
  $('#status-message').text('Your plant has been deleted!')
  api.getPlants()
    .then(getAllPlantsSuccess)
    .catch(getAllPlantsFailure)
}

const deletePlantFailure = function () {
  $('#status-message').text("something's not right")
}

module.exports = {
  createPlantSuccess,
  createPlantFailure,
  getAllPlantsSuccess,
  getAllPlantsFailure,
  showPlantSuccess,
  showPlantFailure,
  updatePlantSuccess,
  updatePlantFailure,
  deletePlantSuccess,
  deletePlantFailure
}
