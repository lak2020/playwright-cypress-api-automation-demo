# � Cypress API Automation Demo

A modern API test automation framework built with **Cypress**, **JavaScript**, and **Mochawesome** reporting.

Demonstrates best practices for API testing including service object pattern, data-driven testing, Faker.js random data generation, and CI/CD integration.
## 🔗 Live Demo

| Resource | Link |
|---|---|
| 📊 **Test Report** | [https://lak2020.github.io/playwright-cypress-api-automation-demo/](https://lak2020.github.io/playwright-cypress-api-automation-demo/) |
| 🔄 **CI/CD Pipeline** | [GitHub Actions](https://github.com/lak2020/playwright-cypress-api-automation-demo/actions) |
| 📁 **Source Code** | [GitHub Repository](https://github.com/lak2020/playwright-cypress-api-automation-demo) |
## 🏗️ Project Structure

```
cypress/
├── e2e/                          # Test specs organized by feature
│   ├── posts/                    # GET, POST, PUT, PATCH, DELETE posts
│   │   ├── getPosts.cy.js
│   │   ├── createPosts.cy.js
│   │   ├── updatePosts.cy.js
│   │   └── deletePosts.cy.js
│   ├── users/                    # GET users
│   │   └── getUsers.cy.js
│   └── todos/                    # GET todos
│       └── getTodos.cy.js
├── fixtures/                     # Static test data files
│   └── posts.json
├── services/                     # Service Object Pattern (API abstraction)
│   ├── postApiService.js         # Post CRUD operations
│   ├── userApiService.js         # User read operations
│   └── todoApiService.js         # Todo read operations
├── support/                      # Custom commands & setup
│   ├── commands.js               # Custom Cypress commands
│   └── e2e.js                    # Support file entry point
└── utilities/                    # Helpers
    └── testDataGenerator.js      # Random test data via Faker.js
cypress.config.js                 # Cypress configuration
package.json                      # Dependencies & scripts
```

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Cypress 15** | API testing framework |
| **JavaScript** | Programming language |
| **Faker.js** | Fake test data generation |
| **Mochawesome** | Test reporting (HTML + JSON) |

## 📋 Prerequisites

- [Node.js 18+](https://nodejs.org/)
- npm (comes with Node.js)

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/lak2020/playwright-cypress-api-automation-demo.git
cd playwright-cypress-api-automation-demo

# 2. Install dependencies
npm install

# 3. Run all tests (headless)
npm test

# 4. Open Cypress interactive runner
npm run test:open
```

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:posts
npm run test:users
npm run test:todos

# Open Cypress interactive mode
npm run test:open

# Generate Mochawesome HTML report after tests
npm run report
```

## 📊 Test API (JSONPlaceholder)

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free, no-auth-required fake REST API:

| Endpoint | Method | Description |
|---|---|---|
| `/posts` | GET | List all posts (100 items) |
| `/posts/{id}` | GET | Single post |
| `/posts?userId={id}` | GET | Posts by user |
| `/posts/{id}/comments` | GET | Comments for a post |
| `/posts` | POST | Create post |
| `/posts/{id}` | PUT | Update post (full) |
| `/posts/{id}` | PATCH | Update post (partial) |
| `/posts/{id}` | DELETE | Delete post |
| `/users` | GET | List all users (10 items) |
| `/users/{id}` | GET | Single user |
| `/todos` | GET | List all todos (200 items) |
| `/todos/{id}` | GET | Single todo |

## 🔧 Configuration

Edit `cypress.config.js` to customize:

```js
e2e: {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  retries: { runMode: 2, openMode: 0 },
}
```

Override base URL via environment variable: `CYPRESS_BASE_URL=https://your-api.com`

## 📝 Key Design Patterns

- **Service Object Pattern** — API operations encapsulated in service classes
- **Custom Commands** — `cy.apiRequest()` wraps `cy.request()` with default headers
- **Data-Driven Testing** — `forEach` loops for parameterized tests + Faker.js random data
- **Mochawesome Reporting** — Rich HTML reports with charts

## 📊 Reporting

```bash
# After running tests, generate and view the report:
npm run report
# Open cypress/reports/html/report.html in your browser
```

## 🔄 CI/CD

GitHub Actions workflow runs on push to `main`/`develop` and on PRs. See `.github/workflows/api-tests.yml`.

## 📜 License

MIT
