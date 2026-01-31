const supabase = require('../services/supabase')

module.exports = {
  // =========================
  // Views
  // =========================
  loginView(req, res) {
    res.render('auth/login', { layout: false })
  },

  registerView(req, res) {
    res.render('auth/register', { layout: false })
  },

  forgotPasswordView(req, res) {
    res.render('auth/forgot-password', { layout: false })
  },

  // =========================
  // Actions
  // =========================

  // LOGIN
  async login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.render('auth/login', {
        layout: false,
        error: 'Informe e-mail e senha'
      })
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error || !data.user) {
        return res.render('auth/login', {
          layout: false,
          error: 'E-mail ou senha inválidos'
        })
      }

      // Sessão
      req.session.user = {
        id: data.user.id,
        email: data.user.email
      }

      return res.redirect('/dashboard')
    } catch (err) {
      console.error('LOGIN ERROR:', err)
      return res.render('auth/login', {
        layout: false,
        error: 'Erro interno ao realizar login'
      })
    }
  },

  // REGISTRO
  async register(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.render('auth/register', {
        layout: false,
        error: 'Informe e-mail e senha'
      })
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password
      })

      if (error) {
        return res.render('auth/register', {
          layout: false,
          error: error.message
        })
      }

      return res.render('auth/login', {
        layout: false,
        success:
          'Conta criada com sucesso! Verifique seu e-mail para ativação.'
      })
    } catch (err) {
      console.error('REGISTER ERROR:', err)
      return res.render('auth/register', {
        layout: false,
        error: 'Erro interno ao criar conta'
      })
    }
  },

  // RECUPERAÇÃO DE SENHA
  async forgotPassword(req, res) {
    const { email } = req.body

    if (!email) {
      return res.render('auth/forgot-password', {
        layout: false,
        error: 'Informe o e-mail'
      })
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/reset-password'
      })

      if (error) {
        return res.render('auth/forgot-password', {
          layout: false,
          error: 'Não foi possível enviar o e-mail de recuperação'
        })
      }

      return res.render('auth/forgot-password', {
        layout: false,
        success:
          'Se o e-mail existir, enviaremos as instruções para recuperação.'
      })
    } catch (err) {
      console.error('FORGOT PASSWORD ERROR:', err)
      return res.render('auth/forgot-password', {
        layout: false,
        error: 'Erro interno ao solicitar recuperação'
      })
    }
  },

  // LOGOUT
  logout(req, res) {
    req.session.destroy(err => {
      if (err) {
        console.error('LOGOUT ERROR:', err)
        return res.redirect('/dashboard')
      }

      res.clearCookie('connect.sid')
      return res.redirect('/login')
    })
  }
}
