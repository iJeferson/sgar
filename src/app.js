require('dotenv').config()
const express = require('express')
const session = require('express-session')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

// Body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));


// Sessão
app.use(
  session({
    secret: 'adminlte_secret',
    resave: false,
    saveUninitialized: false
  })
)

// Handlebars
app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main'
  })
)
app.set('view engine', 'handlebars')

// AdminLTE (node_modules)
app.use(
  '/adminlte',
  express.static(
    path.join(__dirname, '../node_modules/admin-lte/dist')
  )
)

app.use(
  '/adminlte/plugins',
  express.static(
    path.join(__dirname, '../node_modules/admin-lte/plugins')
  )
)

// Rota de teste
app.get('/login', (req, res) => {
  res.render('auth/login', { layout: false })
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/login')
})