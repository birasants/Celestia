# Celestia

Bem-vindo ao **Celestia**! Este é um projeto Angular que permite aos usuários visualizar e reproduzir vídeos, com funcionalidades de autenticação usando o Auth0, busca de vídeos e uma interface elegante baseada em um design do Figma.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Auth0](#configuração-do-auth0)
- [Executando a Aplicação](#executando-a-aplicação)
- [Uso](#uso)
- [Design do Figma](#design-do-figma)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
- [Angular CLI](https://angular.io/cli) (opcional, mas recomendado)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/celestia.git
   cd celestia
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

3. **Instale o `json-server` globalmente (se ainda não tiver):**

   ```bash
   npm install -g json-server
   ```

---

## Configuração do Auth0

Para habilitar a autenticação em sua aplicação, você precisará configurar uma conta no Auth0 e obter seu `domain` e `clientId`.

### **Passo 1: Crie uma Conta no Auth0**

- Acesse [Auth0 Dashboard](https://auth0.com/) e crie uma conta gratuita, se ainda não tiver uma.

### **Passo 2: Crie uma Aplicação no Auth0**

1. No painel do Auth0, vá para **Applications** e clique em **Create Application**.
2. Dê um nome à sua aplicação (por exemplo, `Celestia App`).
3. Selecione **Single Page Web Applications** e clique em **Create**.

### **Passo 3: Configure as URLs Permitidas**

- **Allowed Callback URLs:**

  ```
  http://localhost:4200
  ```

- **Allowed Logout URLs:**

  ```
  http://localhost:4200
  ```

- **Allowed Web Origins:**

  ```
  http://localhost:4200
  ```

### **Passo 4: Obtenha o `Domain` e o `Client ID`**

- No painel da sua aplicação no Auth0, você encontrará o **Domain** e o **Client ID**. Anote esses valores.

### **Passo 5: Configure o `auth_config.json`**

- Crie um arquivo chamado `auth_config.json` na raiz do seu projeto e adicione as seguintes informações:

  ```json
  {
    "domain": "SEU_DOMAIN",
    "clientId": "SEU_CLIENT_ID"
  }
  ```

  **Substitua `SEU_DOMAIN` e `SEU_CLIENT_ID` pelos valores obtidos no Auth0.**

### **Passo 6: Atualize o `environment.ts` (Opcional)**

- Se preferir, você pode adicionar as configurações do Auth0 no arquivo `environment.ts`:

  ```typescript
  export const environment = {
    production: false,
    auth: {
      domain: 'SEU_DOMAIN',
      clientId: 'SEU_CLIENT_ID',
      redirectUri: window.location.origin,
    },
    apiUrl: 'http://localhost:3000',
  };
  ```

---

## Executando a Aplicação

### **Passo 1: Inicie o `json-server`**

O `json-server` simula uma API RESTful para fornecer dados para a aplicação.

```bash
json-server --watch db.json --cors
```

- Certifique-se de que o arquivo `db.json` está na raiz do projeto e contém os dados necessários (usuários, vídeos, etc.).

### **Passo 2: Inicie a Aplicação Angular**

Em outra janela de terminal, execute:

```bash
ng serve
```

- Isso iniciará a aplicação em `http://localhost:4200`.

---

## Uso

1. **Acesse a aplicação:**

   Abra o navegador e vá para `http://localhost:4200`.

2. **Autentique-se:**

   - Clique em **Log in** para fazer login.
   - Você pode fazer login usando as opções de login social configuradas no Auth0 (por exemplo, Google, Facebook).

3. **Navegue pelos vídeos:**

   - Use a barra de pesquisa para filtrar vídeos.
   - Clique em um vídeo para assistir.

4. **Logout:**

   - Clique no ícone de usuário na navbar e selecione **Logout** para sair.

---

## Design do Figma

O design da aplicação foi baseado em um projeto no Figma. Você pode visualizar o design original no link abaixo:

[Celestia - Figma Design](https://www.figma.com/design/UiSIcrK1Z3RixZDVtbMq8u/Celestia?node-id=0-1&t=X9bfvtO7irtH5W1x-1)

---

## Scripts Disponíveis

- **`ng serve`**: Inicia a aplicação Angular em modo de desenvolvimento.
- **`json-server --watch db.json --cors`**: Inicia o servidor JSON para fornecer dados de API.
- **`ng build`**: Compila a aplicação para produção na pasta `dist/`.
- **`ng test`**: Executa os testes unitários via [Karma](https://karma-runner.github.io).

---

## Estrutura do Projeto

```
celestia/
├── src/
│   ├── app/
│   │   ├── home/
│   │   ├── login-screen/
│   │   ├── navbar/
│   │   ├── video-card/
│   │   ├── watch-video/
│   │   ├── services/
│   │   │   ├── videoService/
│   │   │   └── search.service.ts
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── index.html
├── auth_config.json
├── db.json
├── package.json
└── README.md
```

---

## Tecnologias Utilizadas

- **Angular**: Framework para construção da aplicação web.
- **Auth0**: Serviço de autenticação e autorização.
- **json-server**: Simula uma API RESTful para fornecer dados.
- **Angular Material**: Componentes de interface de usuário.
- **RxJS**: Programação reativa para manipulação de dados assíncronos.
- **SCSS**: Preprocessador CSS para estilização.

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -m 'Minha nova feature'`.
4. Envie para o branch original: `git push origin minha-feature`.
5. Abra um pull request.

---

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

---

**Divirta-se explorando o Celestia!** 🚀
