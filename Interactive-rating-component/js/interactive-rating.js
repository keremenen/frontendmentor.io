'use strict'
let selectedRating = null
const inputs = document.querySelectorAll('.rating__input')
const submitButton = document.querySelector('.rating__submit-button')

const handleSubmit = () => {
  if (selectedRating === null) {
    console.log('please change number')
    return
  }
  console.log(`selected rating:${selectedRating}`)
}

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    selectedRating = input.value
  })
})

submitButton.addEventListener('click', handleSubmit)
