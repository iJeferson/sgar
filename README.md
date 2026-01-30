# SGAR – Sistema de Gerenciamento de Acesso Remoto

O **SGAR** é um portal centralizado para **gerenciamento e organização de acessos remotos**, permitindo controlar conexões via **RDP, VNC, AnyDesk e TeamViewer** a partir de um único sistema.

O objetivo do projeto é **padronizar**, **organizar** e **auditar** acessos remotos em ambientes corporativos, governamentais ou de suporte técnico com múltiplos hosts.

---

## 🎯 Objetivo do Projeto

- Centralizar acessos remotos em um único portal
- Eliminar planilhas e anotações soltas
- Padronizar acesso a hosts (postos, clientes, unidades)
- Garantir rastreabilidade e organização
- Facilitar suporte técnico em larga escala

> ⚠️ O SGAR **não substitui** softwares de acesso remoto.  
> Ele atua como **gerenciador e orquestrador**, respeitando licenças e termos dos fornecedores.

---

## 🔐 Tipos de Acesso Gerenciados

- **RDP** (Remote Desktop Protocol)
- **VNC**
- **AnyDesk** (launcher externo)
- **TeamViewer** (launcher externo)

---

## 🧠 Arquitetura Inicial

- **Backend**: Node.js + Express
- **Frontend**: HTML + AdminLTE 4
- **Gerenciamento de Sessão**: express-session (planejado)
- **Autenticação**: Base local / Supabase Auth (planejado)
- **Arquivos Estáticos**: Pasta `public`

---

## 🎨 Interface

### Página de Login
- Layout moderno com **AdminLTE**
- Login por email e senha
- Opção de login social (Google – planejado)
- Recuperação de senha (planejado)

### Branding
- Logo institucional do **SGAR**
- Favicon personalizado (PNG transparente)
- Identidade visual focada em:
  - Segurança
  - Controle
  - Acesso remoto

---

## 🖼️ Identidade Visual

### Logo
- Ícone em formato de **escudo**
- Monitor com símbolo de segurança (cadeado)
- Elementos de conectividade (rede)
- Gradiente azul/verde (segurança + tecnologia)

### Favicon
- PNG com fundo transparente
- Ajustado para melhor visualização em abas do navegador
- Tamanho otimizado para navegadores modernos

---

## 📁 Estrutura do Projeto (parcial)

```bash
project/
├── public/
│   ├── images/
│   │   ├── sgar-logo.png
│   │   └── sgar-favicon.png
│   └── adminlte/
├── views/
│   └── login.html (ou login.handlebars)
├── app.js
└── README.md
