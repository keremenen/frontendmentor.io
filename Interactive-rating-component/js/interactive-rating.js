'use strict'
let selectedRating = null
const inputs = document.querySelectorAll('.rating__input')
const submitButton = document.querySelector('.rating__submit-button')
const ratingSpan = document.querySelector('.acknowledgments__selected-rating')

const handleSubmit = () => {
  if (selectedRating === null) {
    alert('Before submitting the form, select your rating')
    return
  }
  ratingSpan.innerHTML = selectedRating
}

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    selectedRating = input.value
    input.classList.toggle('active')
  })
})

submitButton.addEventListener('click', handleSubmit)
