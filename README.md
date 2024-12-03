Aqui está o README atualizado com a configuração do `.env`:

---

# 📝 API de Lista de Tarefas

Este projeto é uma API simples desenvolvida em **NestJS** para gerenciar tarefas. O objetivo principal é aprimorar conceitos e práticas utilizando essa biblioteca, conhecida por sua excelente documentação e facilidade de uso.

## 🚀 Funcionalidades

- **Criar Tarefa**: Adiciona uma nova tarefa à lista.  
- **Remover Tarefa**: Exclui uma tarefa pelo ID.  
- **Buscar Tarefas**: Lista todas as tarefas registradas.  
- **Buscar por ID**: Retorna uma tarefa específica com base no ID.  
- **Atualizar Tarefa**: Edita informações de uma tarefa existente.

---

## 🛠️ Tecnologias Utilizadas

- **NestJS**  
- **MySQL**  
- **TypeORM**  
- **Node.js**  

---

## 📂 Estrutura do Projeto

```plaintext
.
├── src
│   ├── tasks
│   │   ├── tasks.controller.ts
│   │   ├── tasks.module.ts
│   │   ├── tasks.service.ts
│   │   └── tasks.entity.ts
│   ├── app.module.ts
│   └── main.ts
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

- **Node.js** >= 16.x  
- **MySQL**  
- **Nest CLI** (opcional, para comandos facilitados)

---

## 📥 Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu_usuario/sua_api_tarefas.git
   cd sua_api_tarefas
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`:**  
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```plaintext
   DATABASE_HOST=localhost
   DATABASE_PORT=3306
   DATABASE_USER=seu_usuario
   DATABASE_PASS=sua_senha
   DATABASE_NAME=nome_do_banco

   PORT=3000
   ```

4. **Edite o arquivo `ormconfig.json`:**  
   Configure o arquivo para utilizar o `.env`:

   ```json
   {
     "type": "mysql",
     "host": process.env.DATABASE_HOST,
     "port": parseInt(process.env.DATABASE_PORT),
     "username": process.env.DATABASE_USER,
     "password": process.env.DATABASE_PASS,
     "database": process.env.DATABASE_NAME,
     "entities": ["dist/**/*.entity{.ts,.js}"],
     "synchronize": true
   }
   ```

   > **Nota:** A opção `"synchronize": true` cria as tabelas automaticamente. Use com cautela em produção.

---

## ▶️ Como Executar

1. **Inicie a aplicação:**

   ```bash
   npm run start
   ```

2. **Acesse a API:**  
   A API estará disponível em `http://localhost:3000`.

---

## 📊 Endpoints

| Método | Rota              | Descrição              |
|--------|-------------------|------------------------|
| POST   | `/tasks`          | Adicionar uma tarefa   |
| GET    | `/tasks`          | Listar todas as tarefas|
| GET    | `/tasks/:id`      | Buscar tarefa por ID   |
| PATCH  | `/tasks/:id`      | Atualizar uma tarefa   |
| DELETE | `/tasks/:id`      | Remover uma tarefa     |

---

## 🔍 Futuras Melhorias

- Adição de testes automatizados para melhorar a cobertura e a confiabilidade do código.

## 📩 Sugestões e Contato

Se tiver sugestões ou dúvidas, envie um e-mail para **hemanoel718@gmail.com**.

---

Se precisar de mais alguma alteração, é só avisar! 😊
