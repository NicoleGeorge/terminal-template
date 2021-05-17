const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

// EVENT LISTENER

about.addEventListener('click', () => {
  const aboutBox = new WinBox( {
    title: 'About Me',
    background: '#F2B591',
  })
})