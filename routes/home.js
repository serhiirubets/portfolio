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

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Обо мне',
    isHome: true,
    links,
    skills,
  })
})


module.exports = router
