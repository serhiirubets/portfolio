const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const homeRoute = require('./server/routes/home')

const app = express()
const PORT = process.env.PORT || 8765

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'server/views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoute)


async function start() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

start();
