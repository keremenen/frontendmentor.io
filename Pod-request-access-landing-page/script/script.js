const form = document.querySelector('#signup-form')
const input = document.querySelector('.form__input')
const errorMessage = document.querySelector('.form__error-message')

const formMessages = {
  empty: 'Oops! Please add your email',
  incorrectFormat: 'Oops! Please check your email',
  success: 'Success!',
}

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const handleSubmit = (e) => {
  e.preventDefault()

  // Clearing previous states
  form.classList.remove('error', 'success')

  // Setting the message based on input value and validation
  let message = ''
  if (!input.value) {
    message = formMessages.empty
    form.classList.add('error')
  } else if (!validateEmail(input.value)) {
    message = formMessages.incorrectFormat
    form.classList.add('error')
  } else {
    message = formMessages.success
    form.classList.add('success')
  }
  // Updating the error message
  errorMessage.textContent = message
}

form.addEventListener('submit', handleSubmit)
