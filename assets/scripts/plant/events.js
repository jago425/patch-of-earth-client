const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const newPlant = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createNewPlant(data)
    .then(ui.createPlantSuccess)
    .then(getPlants)
    .catch(ui.createPlantFailure)
}

const getPlants = function () {
  api.getPlants()
    .then(ui.getAllPlantsSuccess)
    .catch(ui.getAllPlantsFailure)
}

const getAllPlants = function () {
  event.preventDefault()
  getPlants()
}

const onLaunchEditModal = function (event) {
  event.preventDefault()
  $('.modal-message').text('')
  api.showPlant(event.target.dataset.id)
    .then(ui.showPlantSuccess)
    .catch(ui.showPlantFailure)
}

const onSubmitUpdatePlant = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = data.plant.id
  api.updatePlant(id, data)
    .then(ui.updatePlantSuccess)
    .catch(ui.updatePlantFailure)
}

const onLaunchDeleteModal = function (event) {
  event.preventDefault()
  const plantId = event.target.dataset.id
  $('#confirm-delete').attr('data-id', plantId)
}

const onDeletePlant = function (event) {
  event.preventDefault()
  const deleteTarget = event.target.dataset.id
  api.deletePlant(deleteTarget)
    .then(ui.deletePlantSuccess)
    .catch(ui.deletePlantFailure)
}

const resetFormOnCancel = function (event) {
  $('.plant-input').val('')
}

const plantHandlers = function () {
  $(document).on('submit', '.add-plant', newPlant)
  $('#reset').on('click', resetFormOnCancel)
  $(document).on('click', '.index-plants', getAllPlants)
  $(document).on('click', '.edit-button', onLaunchEditModal)
  $(document).on('submit', '.editplant', onSubmitUpdatePlant)
  $(document).on('click', '.delete-modal-button', onLaunchDeleteModal)
  $('#confirm-delete').on('click', onDeletePlant)
}

module.exports = {
  newPlant,
  getAllPlants,
  onLaunchEditModal,
  onSubmitUpdatePlant,
  onDeletePlant,
  plantHandlers
}
