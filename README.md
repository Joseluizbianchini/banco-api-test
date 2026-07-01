# Banco API Tests

Este repositório contém uma suíte de testes automatizados de API para o sistema bancário fictício, focada em validar os endpoints de **Autenticação (Login)** e **Transferências** da API [banco-api](https://github.com/juliodelimas/banco-api).

A suíte foi desenvolvida utilizando **JavaScript** com as ferramentas **Mocha**, **Chai**, e **Supertest**, além do **Mochawesome** para geração automática de relatórios interativos em HTML.

---

## 🛠️ Tecnologias e Dependências

- **Runtime**: [Node.js](https://nodejs.org/)
- **Test Runner**: [Mocha](https://mochajs.org/)
- **Assertion Library**: [Chai](https://www.chaijs.com/)
- **HTTP Client/Assertion**: [Supertest](https://github.com/ladjs/supertest)
- **Environment Management**: [Dotenv](https://github.com/motdotla/dotenv)
- **Reports**: [Mochawesome](https://github.com/adamgruber/mochawesome)

---

## 📁 Estrutura de Pastas

```bash
├── fixtures/               # Arquivos JSON contendo dados estáticos de teste (payloads)
│   ├── postLogin.json      # Dados para requisição de Login
│   └── postTransferencia.json # Dados para requisição de Transferência
├── helpers/                # Métodos auxiliares reutilizáveis nos testes
│   └── autenticacao.js     # Helper para obter dinamicamente o Token JWT de Autenticação
├── test/                   # Casos de testes automatizados
│   ├── login.test.js       # Testes da API de login (/login)
│   └── transferencia.test.js # Testes das APIs de transferência (/transferencias)
├── .env                    # Variáveis de ambiente locais (não versionado)
├── .gitignore              # Configuração do Git para arquivos ignorados
├── package.json            # Scripts de execução e dependências do projeto
└── README.md               # Documentação do projeto
```

---

## 🚀 Como Iniciar e Executar

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### 2. Instalação das Dependências
Instale todos os pacotes necessários rodando o comando na raiz do projeto:
```bash
npm install
```

### 3. Configuração de Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto contendo a URL base da API que deseja testar:
```env
BASE_URL=http://localhost:3000
```
*(Substitua `http://localhost:3000` pela URL correta do seu ambiente).*

### 4. Executando os Testes
Para executar todos os testes da suíte, utilize o comando:
```bash
npm test
```

---

## 📊 Relatório de Execução

Após a execução dos testes via `npm test`, um relatório HTML interativo será gerado automaticamente pelo **Mochawesome** no diretório:
```bash
mochawesome-report/mochawesome.html
```

Você pode abrir este arquivo diretamente em qualquer navegador de internet para visualizar de maneira amigável o status de sucesso/falha de cada caso de teste executado.
