'use strict'
const store = require('../store')
// const api = require('../bucket_list/api')
// const handlebars = require('../templates/helpers/bucket_list.handlebars')

const signUpSuccess = function (data) {
  $('#status-message').text('You have successfully signed up!')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  // console.log('sign-up called .catch on %o with arguments: %o', this, arguments)
  $('#status-message').text('Sign-Up Failed!')
  $('.nppi').val('')
  clearStatus()
}

const signInSuccess = function (response, event) {
  store.user = response.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.nppi').val('')
  $('#status-message').text('')
  $('[data-user]').removeClass('hidden')
  $('#see-plants').show()
  $('.add-plant-button').show()
  $('.header-message').text('Aloe There!')
}

const signInFailure = function () {
  $('#status-message').text('Login Failed')
  $('.nppi').val('')
  clearStatus()
}

const changePasswordSuccess = function () {
  $('#status-message').text('Changed password successfully')
  $('.nppi').val('')
  $('#change-password-modal').modal('hide')
  clearStatus()
}

const changePasswordFailure = function () {
  $('.chg-pw-modal-message').text("That didn't work, please try again")
}

const signOutSuccess = function () {
  $('#status-message').text('Signed out successfully')
  store.user = null
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('[data-user]').addClass('hidden')
  $('#see-plants').hide()
  $('.add-plant-button').hide()
  $('.table').hide()
  $('.header-message').text("Don't leaf! Come back!")
  clearStatus()
}

const signOutFailure = function () {
  $('#status-message').text('Logout Failed')
  clearStatus()
}

const clearStatus = function () {
  setTimeout(function () {
    $('#status-message').text('')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
  // onGetListSuccess,
  // onGetListFailure
}
