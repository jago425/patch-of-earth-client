'use strict'
const store = require('../store')
// const api = require('../bucket_list/api')
// const handlebars = require('../templates/helpers/bucket_list.handlebars')

const signUpSuccess = function (data) {
  $('#status-message').text('You have successfully signed up!')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#status-message').text('Sign-Up Failed!')
}

const signInSuccess = function (response, event) {
  store.user = response.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.nppi').val('')
  $('#status-message').text('')
}

const signInFailure = function () {
  $('#status-message').text('Login Failed')
  $('.nppi').val('')
}

const changePasswordSuccess = function () {
  $('#status-message').text('Changed password successfully')
  $('.nppi').val('')
  $('#change-password-modal').modal('hide')
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
  // $('#list-form').hide()
  // $('[data-user]').addClass('hidden')
  // $('#bucket-list-handlebars').empty()
}

const signOutFailure = function () {
  $('#status-message').text('Logout Failed')
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
