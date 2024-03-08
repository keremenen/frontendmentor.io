const button = document.querySelector('.article__share-button')

const handleShareButtonClick = () => {
  const article = document.querySelector('.article')
  article.classList.toggle('active')
}

button.addEventListener('click', handleShareButtonClick, false)
