const button = document.querySelector('.article__share-button')

const handleShareButtonClick = () => {
  const footer = document.querySelector('.article')
  footer.classList.toggle('active')
}

button.addEventListener('click', handleShareButtonClick, false)
