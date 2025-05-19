# NoPrecinho

O repositório [NoPrecinho-server](https://github.com/matheusfdosan/NoPrecinho-server) é um projeto backend desenvolvido em Node.js com o framework Fastify. Ele tem como objetivo fornecer uma API para busca e comparação de preços de produtos em diferentes marketplaces, como Americanas e Carrefour. A aplicação realiza web scraping para extrair informações relevantes dos sites e disponibilizá-las de forma estruturada para consumo por aplicações frontend ou outros serviços.

---

## 📦 Estrutura do Projeto

* **`src/`**: Contém os arquivos principais da aplicação, incluindo rotas, serviços e utilitários.
* **`envVariables.js`**: Arquivo de configuração de variáveis de ambiente, como portas e URLs base.
* **`package.json`**: Define as dependências do projeto e scripts de execução.
* **`.gitignore`**: Especifica os arquivos e pastas que devem ser ignorados pelo Git.

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/matheusfdosan/NoPrecinho-server.git
   cd NoPrecinho-server
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias, conforme o exemplo abaixo:

   ```env
   PORT=3000
   MONGODB=<link-mongodb>
   ```

4. **Inicie o servidor:**

   ```bash
   npm start
   ```

   O servidor estará disponível em `http://localhost:3000`.

---

## 📌 Endpoints Disponíveis

* **`GET /products?search=termo`**: Retorna uma lista de produtos relacionados ao termo de busca fornecido, agregando resultados de diferentes marketplaces.

---

## 🛠 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript no servidor.
* **Fastify**: Framework web rápido e eficiente para Node.js.
* **Puppeteer**: Ferramenta para automação de navegação e scraping de páginas que utilizam JavaScript para renderização dinâmica.
* **CORS**: Permite que seu servidor aceite requisições de origens diferentes, como de um frontend hospedado em outro domínio.
* **Bcrypt**: É utilizado para hash de senhas, garantindo que mesmo que o banco de dados seja comprometido, as senhas não sejam facilmente recuperadas.
* **Mongoose**: É uma biblioteca ODM (Object Data Modeling) para MongoDB, facilitando a definição de esquemas e interações com o banco de dados
* **DotEnv**: Permite carregar variáveis de ambiente de um arquivo .env para process.env, mantendo informações sensíveis fora do código-fonte.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Para mais informações e atualizações, acesse o repositório oficial: [https://github.com/matheusfdosan/NoPrecinho-server](https://github.com/matheusfdosan/NoPrecinho-server).
