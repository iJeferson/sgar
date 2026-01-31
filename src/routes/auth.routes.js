const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

// =========================
// Views
// =========================
router.get('/login', authController.loginView)
router.get('/register', authController.registerView)
router.get('/forgot-password', authController.forgotPasswordView)

// =========================
// Actions (POST)
// =========================
router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/forgot-password', authController.forgotPassword)

// =========================
// Logout
// =========================
router.get('/logout', authController.logout)

module.exports = router
