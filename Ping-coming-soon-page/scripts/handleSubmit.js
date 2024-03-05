const submitForm = document.querySelector('#subscription-form')

const handleSubmit = (e) => {
  e.preventDefault() // Prevent default form submission behavior

  const emailValue = document.querySelector('.subscription-form__input').value
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Remove error class from the form every time when function runs
  submitForm.classList.remove('error')

  // Add error class to the form if email is invalid
  if (!pattern.test(emailValue)) {
    submitForm.classList.add('error')
  }
}

submitForm.addEventListener('submit', handleSubmit)
