require('dotenv').config()
const express = require('express')
const session = require('express-session')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

// Body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

// Sessão
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'adminlte_secret',
    resave: false,
    saveUninitialized: false
  })
)

app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, '../views/partials')
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

// AdminLTE
app.use(
  '/adminlte',
  express.static(path.join(__dirname, '../node_modules/admin-lte/dist'))
)

app.use(
  '/adminlte/plugins',
  express.static(path.join(__dirname, '../node_modules/admin-lte/plugins'))
)

// Rotas 
const authRoutes = require('./routes/auth.routes')
app.use('/', authRoutes)

// Dashboard
const dashboardRoutes = require('./routes/dashboard.routes')
app.use('/', dashboardRoutes)

// Server
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/login')
})
