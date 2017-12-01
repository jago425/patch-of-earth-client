
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
    $('.header-message').text("Always Be Plantin'!")
  } else {
    $('.table').hide()
    $('#status-message').text("Oh Snapdragon! You don't have any plants saved. Click the 'Plant Something' Groot and get some plants in here!")
  }
}

const getAllPlantsFailure = function () {
  $('#status-message').text('failed to load your plants')
  clearStatus()
}

const showPlantSuccess = function (data) {
  // adding a key to the object that Handlebars can access and work with
  data['option'] = []
  // create an array of the available options from the dropdown
  const availableOptions = ['Flower', 'Shrub', 'Fruit', 'Vegetable', 'Tree', 'Succulent', 'Vine', 'Other']
  // iterate through the availableOptions array and in each iteration, compare the value in the array to the value that was returned from the API.
  availableOptions.forEach(plant_type => {
    const selected = plant_type === data.plant.plant_type ? 'selected' : ''
    // If the value returned from the API matches the value from the array, set the current value from the array as the selected type
    const option = [plant_type, selected]
    // and then push the value from the array to the array of available options
    data['option'].push(option)
  })
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
  }, 3500)
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
