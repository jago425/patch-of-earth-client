const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const newPlant = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createNewPlant(data)
    .then(ui.createPlantSuccess)
    .catch(ui.createPlantFailure)
}

const getAllPlants = function (data) {
  event.preventDefault()
  api.getPlants()
    .then(ui.getAllPlantsSuccess)
    .catch(ui.getAllPlantsFailure)
}

const onLaunchEditModal = function (event) {
  event.preventDefault()
  $('.modal-message').text('')
  api.showPlant(event.target.dataset.id)
    .then(ui.showPlantSuccess)
    .catch(ui.showPlantFailure)
}
const plantHandlers = function () {
  $(document).on('submit', '.add-plant', newPlant)
  $(document).on('click', '.index-plants', getAllPlants)
  $(document).on('click', '.edit-button', onLaunchEditModal)
  // click handler to wait for edit button to exist then click handler is added to it
  // $(document).on('click', '.edit-button', bucketListUi.onLaunchEditModal)
  // click handle to wait until the save changes  button on the edit modal exists
  // $(document).on('submit', '#edit-modal', bucketListUi.onSubmitUpdateListItem)
  // click handler to wait for delete button to exist, then click handler is added to it
  // $(document).on('click', '.delete-item', bucketListUi.onDeleteClickButton)
}

module.exports = {
  newPlant,
  getAllPlants,
  onLaunchEditModal,
  plantHandlers
}
