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

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Обо мне',
    isHome: true,
    links,
  })
})


module.exports = router
