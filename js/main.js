const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

// EVENT LISTENER

about.addEventListener('click', () => {
  const aboutBox = new WinBox( {
    title: 'About Me',
    background: '#F2B591',
    width: '450px',
    height: '450px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox( {
    title: 'Contact Me',
    background: '#F2B591',
    width: '450px',
    height: '450px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent
  })
})