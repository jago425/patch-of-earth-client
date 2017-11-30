
const indexPlantsTemplate = require('../templates/helpers/plant-table.handlebars')
const showEditPlantsTemplate = require('../templates/helpers/edit-plant.handlebars')
const api = require('./api')

const createPlantSuccess = function () {
  $('#addPlantModal').modal('toggle')
  $('#status-message').text('Your plant has been added!')
  $('.plant-input').val('')
  clearStatus()
}

const createPlantFailure = function () {
  $('#status-message').text("something's not right")
  clearStatus()
}

const getAllPlantsSuccess = function (data) {
  if (data.plants.length > 0) {
    $('#plant-table-data').empty()
    const indexPlants = indexPlantsTemplate({ plants: data.plants })
    $('#plant-table-data').html(indexPlants)
  } else {
    $('.table').hide()
    $('#status-message').text("Oh Snapdragon! You don't have any plants saved yet. Click the 'Add' button and get some plants in there!")
  }
}

const getAllPlantsFailure = function () {
  $('#status-message').text('failed to load your plants')
  clearStatus()
}

const showPlantSuccess = function (data) {
  const showPlant = showEditPlantsTemplate(data)
  $('.edit-plant').html(showPlant)
}

const showPlantFailure = function () {
  $('#status-message').text("something's not right")
  clearStatus()
}
const updatePlantSuccess = function () {
  $('#editPlantModal').modal('toggle')
  $('#status-message').text('Your plant has been updated!')
  api.getPlants()
    .then(getAllPlantsSuccess)
    .catch(getAllPlantsFailure)
  clearStatus()
}

const updatePlantFailure = function () {
  $('#status-message').text("something's not right")
  clearStatus()
}

const deletePlantSuccess = function () {
  $('#status-message').text('Your plant has been deleted!')
  $('#delete-plant-modal').modal('toggle')
  api.getPlants()
    .then(getAllPlantsSuccess)
    .catch(getAllPlantsFailure)
  clearStatus()
}

const deletePlantFailure = function () {
  $('#status-message').text("something's not right")
  clearStatus()
}

const clearStatus = function () {
  setTimeout(function () {
    $('#status-message').text('')
  }, 2500)
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
