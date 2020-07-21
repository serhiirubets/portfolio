const router = Router()

router.get('/about', (req, res) => {
  res.render('index', {
    title: 'About me',
    isAbout: true,
  })
})


module.exports = router
