'use strict'
// State
let selectedRating = null

// DOM elements
const inputs = document.querySelectorAll('.rating__input')
const submitButton = document.querySelector('.rating__submit-button')
const ratingSpan = document.querySelector('.acknowledgments__selected-rating')
const ratingContainer = document.querySelector('.rating')
const acknowledgmentsContainer = document.querySelector('.acknowledgments')

const handleSubmit = () => {
  if (selectedRating === null) {
    alert('Before submitting the form, select your rating')
    return
  }
  ratingSpan.innerHTML = selectedRating

  // Display acknowledgments container instead of rating container
  acknowledgmentsContainer.style.display = 'flex'
  ratingContainer.style.display = 'none'
}

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    //Remove active class from every input
    inputs.forEach((input) => input.classList.remove('active'))

    //Setting the html tag to the selected value
    selectedRating = input.value
    input.classList.toggle('active')
  })
})

submitButton.addEventListener('click', handleSubmit)
