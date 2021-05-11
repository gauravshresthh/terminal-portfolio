const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const skills = document.querySelector('#skills')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const skillsContent = document.querySelector('#skills-content')


about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '700px',
    height: '700px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


skills.addEventListener('click', () => {
  const skillsBox = new WinBox({
    title: 'Skills',
    background: '#00aa00',
    width: '400px',
    height: '500px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: skillsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})