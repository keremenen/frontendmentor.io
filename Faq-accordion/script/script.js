const questions = document.querySelectorAll('.faq__question')

const handleToggle = (question) => {
  const isExpanded = question.getAttribute('aria-expanded') === 'true'
  question.setAttribute('aria-expanded', isExpanded ? 'false' : 'true')
}

questions.forEach((question) => {
  question.addEventListener('click', () => handleToggle(question))
})
