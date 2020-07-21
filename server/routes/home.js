const {Router} = require('express')
const router = Router()
const { links, skills, footerLinks, contacts, footerSocials } = require('../const');
const { addStyles } = require('../helpers');

addStyles(skills);

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Main Page',
    isHome: true,
    links,
    skills,
    contacts,
    footerLinks,
    footerSocials,
  })
})


module.exports = router
