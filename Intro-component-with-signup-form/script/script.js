const introForm = document.querySelector('#intro__form')

const displayError = (inputWrapper, errorMessage) => {
  const errorElement = document.createElement('p')
  errorElement.classList.add('input__form-error-message')
  errorElement.innerText = errorMessage
  inputWrapper.appendChild(errorElement)
}

const clearErrors = () => {
  const errorMessages = document.querySelectorAll('.input__form-error-message')
  const formInputs = document.querySelectorAll('.intro__form-single-input')

  errorMessages.forEach((errorMessage) => errorMessage.remove())
  formInputs.forEach((formInput) => formInput.classList.remove('error'))
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const handleEmailValidation = (formInput) => {
  if (!validateEmail(formInput.value)) {
    displayError(
      formInput.closest('.intro__form-single-wrapper'),
      'Looks like this is not an email'
    )
    return false
  }
}

const handleSubmit = (e) => {
  e.preventDefault()

  clearErrors()

  const formInputs = document.querySelectorAll('.intro__form-single-input')

  formInputs.forEach((formInput) => {
    if (!formInput.value) {
      formInput.classList.add('error')
      displayError(
        formInput.closest('.intro__form-single-wrapper'),
        `${formInput.name} cannot be empty`
      )
    }
    if (formInput.id === 'intro__form-email-input' && formInput.value) {
      handleEmailValidation(formInput)
    }
  })
}

introForm.addEventListener('submit', handleSubmit)
