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

// function to display my index request
// const onGetListSuccess = function (data) {
//   $('#bucket-list-handlebars').empty()
//   const showListItemsHTML = handlebars({list_items: data.list_items})
//   $('#bucket-list-handlebars').html(showListItemsHTML)
//   $('#status-message').text('')
// }
//
// const onGetListFailure = function () {
//   $('#status-message').text('failed to load your list')
// }

const plantHandlers = function () {
  $(document).on('submit', '.add-plant', newPlant)
  $(document).on('click', '.index-plants', getAllPlants)
  // $('.add-plant').on('submit', newPlant)
  // click handler to wait for edit button to exist then click handler is added to it
  // $(document).on('click', '.edit-button', bucketListUi.onLaunchEditModal)
  // click handle to wait until the save changes  button on the edit modal exists
  // $(document).on('submit', '#edit-modal', bucketListUi.onSubmitUpdateListItem)
  // click handler to wait for delete button to exist, then click handler is added to it
  // $(document).on('click', '.delete-item', bucketListUi.onDeleteClickButton)
}

module.exports = {
  newPlant,
  // seeAllPlants,
  getAllPlants,
  plantHandlers
}
