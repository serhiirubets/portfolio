const {Router} = require('express')
const router = Router()
const { links, skills } = require('../const');
const { getCircleStyles, addStyles } = require('../helpers');



addStyles(skills);
const contacts = [
  {
    text: 'amatorsergey',
    icon: 'skype.svg',
    href: 'skype:amatorsergey',
  },
  {
    text: 'serhii.rubets@gmail.com',
    icon: 'envelope.svg',
    href: 'mailto:serhii.rubets@gmail.com',
  },
  {
    text: '+380639997792',
    icon: 'phone.svg',
    href: 'tel:+380639997792',
  },
  {
    text: 'Ukraine, Kyiv',
    icon: 'map_marker.svg',
    href: 'https://goo.gl/maps/tj5j8kbDghTLShB37',
  },
]

const footerLinks = [
  {
    text: 'My works',
    url: '/works'
  },
  {
    text: 'About me',
    url: '/about'
  },
  {
    text: 'Auth',
    url: 'auth'
  }
]

const footerSocials = [
  {
    icon: 'facebook_round',
    url: 'https://www.facebook.com/serhiirubets'
  },
  {
    icon: 'github_round',
    url: 'https://github.com/serhiirubets'
  },
  {
    icon: 'in_round',
    url: 'https://www.instagram.com/serhii_rubets'
  }
]

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Обо мне',
    isHome: true,
    links,
    skills,
    contacts,
    footerLinks,
    footerSocials,
  })
})


module.exports = router
