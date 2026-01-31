const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')

// Dashboard protegido
router.get('/dashboard', authMiddleware, (req, res) => {
  res.render('dashboard/index', {
    user: req.session.user
  })
})

module.exports = router
