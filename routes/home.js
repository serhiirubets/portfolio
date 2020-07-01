const {Router} = require('express')
const router = Router()

const links = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/serhiirubets'
  },
  {
    icon: 'github',
    url: 'https://github.com/serhiirubets'
  },
  {
    icon: 'in',
    url: 'https://www.instagram.com/serhii_rubets'
  }
]

const skills = [
  {
    title: 'Front End',
    items: [
      {
        title: 'HTML',
        amount: 80,
      },
      {
        title: 'CSS',
        amount: 85,
      },
      {
        title: 'JS',
        amount: 85,
      },
      {
        title: 'React',
        amount: 85,
      },
      {
        title: 'Redux',
        amount: 85,
      },
      {
        title: 'Angualr',
        amount: 85,
      },
    ]
  },
  {
    title: 'Back End',
    items: [
      {
        title: 'Node.js',
        amount: 60,
      },
      {
        title: 'MongoDB',
        amount: 80,
      }
    ]
  },
  {
    title: 'Other tools',
    items: [
      {
        title: 'Webpack',
        amount: 50,
      }
    ]
  }
]
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
