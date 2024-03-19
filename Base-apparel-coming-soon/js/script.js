const form = document.querySelector('#promo__form')

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (emailRegex.test(email)) return true
  return false
}

const handleSubmit = (e) => {
  e.preventDefault()
  form.classList.remove('error')
  const email = document.querySelector('#email__input')
  if (!validateEmail(email.value)) {
    form.classList.add('error')
  }
  return
}

form.addEventListener('submit', handleSubmit)
