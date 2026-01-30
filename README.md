# SGAR – Sistema de Gerenciamento de Acesso Remoto

<p align="center">
  <img src="public/images/sgar-logo.png" alt="SGAR Logo" width="220">
</p>

O **SGAR (Sistema de Gerenciamento de Acesso Remoto)** é um portal centralizado para **organização, controle e auditoria de acessos remotos**, permitindo gerenciar conexões via **RDP, VNC, AnyDesk e TeamViewer** a partir de um único sistema.

O projeto tem como foco **padronizar processos**, **eliminar controles informais** e **garantir rastreabilidade** em ambientes corporativos, governamentais ou de suporte técnico com múltiplos hosts.

---

## 🎯 Objetivo do Projeto

- Centralizar acessos remotos em um único portal
- Eliminar planilhas e anotações descentralizadas
- Padronizar o acesso a hosts (postos, clientes, unidades)
- Garantir rastreabilidade e organização dos acessos
- Facilitar o suporte técnico em larga escala

> ⚠️ O SGAR **não substitui** softwares de acesso remoto.  
> Ele atua como um **sistema de gerenciamento e orquestração**, respeitando integralmente as licenças e os termos dos fornecedores.

---

## 🔐 Tipos de Acesso Gerenciados

- **RDP** (Remote Desktop Protocol)
- **VNC**
- **AnyDesk** (acesso via launcher externo)
- **TeamViewer** (acesso via launcher externo)

---

## 🧠 Arquitetura Inicial

- **Backend**: Node.js + Express
- **Frontend**: HTML + AdminLTE 4
- **Gerenciamento de Sessão**: `express-session` (planejado)
- **Autenticação**: Base local / Supabase Auth (planejado)
- **Arquivos Estáticos**: Pasta `public`

---

## 🎨 Interface

### Página de Login
- Layout moderno baseado em **AdminLTE**
- Autenticação por email e senha
- Opção de login social (Google – planejado)
- Recuperação de senha (planejado)

---

## 🖼️ Identidade Visual

### 🔷 Logo do Sistema

- Ícone em formato de **escudo**
- Monitor com símbolo de segurança (cadeado)
- Elementos que representam conectividade e rede
- Gradiente azul/verde (tecnologia e segurança)

<p align="center">
  <img src="public/images/sgar-logo.png" alt="Logo SGAR" width="260">
</p>

---

### 🔷 Favicon

- PNG com fundo transparente
- Otimizado para exibição em abas de navegador
- Compatível com navegadores modernos

<p align="center">
  <img src="public/images/sgar-favicon.png" alt="Favicon SGAR" width="96">
</p>

---

## 📁 Estrutura do Projeto

```bash
SGAR/
├── public/
│   └── images/
│       ├── sgar-logo.png
│       └── sgar-favicon.png
├── src/
│   └── app.js
├── views/
│   ├── auth/
│   │   └── login.handlebars
│   └── layouts/
│       └── main.handlebars
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
