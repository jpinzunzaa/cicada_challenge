# Cicada Challenge Monorepo

This is a **monorepo** for the **Cicada Challenge**, built using **Next.js**, **TypeScript**, **Turborepo**, and modern tools to efficiently manage multiple packages in a single repository.

---

## 📂 Monorepo Structure

The project follows a structured monorepo approach:

```
cicada-challenge/
│── apps/               # Main applications
│   ├── frontend/       # Frontend application (Next.js)
│── packages/           # Shared libraries
│   ├── ui/             # Reusable UI components
│   ├── patterns/       # Contexts, hooks, and design patterns
│   ├── utils/          # General utilities
│── .github/            # GitHub Actions and CI/CD configurations
│── node_modules/       # Installed dependencies
│── .eslintrc.js        # ESLint configuration
│── jest.config.js      # Jest testing configuration
│── tsconfig.json       # TypeScript configuration
│── package.json        # Root package management
│── turbo.json          # Turborepo configuration
│── README.md           # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/cicada-challenge.git
cd cicada-challenge
```

### 2️⃣ Install Dependencies

Make sure you have **Node.js** installed. We recommend using the latest **LTS version**.

Then, install the dependencies:

```sh
npm install
```

### 3️⃣ Run the Application

To start the **frontend** in development mode:

```sh
npm run dev
```

---

## 🧪 Running Tests

The project uses **Jest** and **Testing Library** for unit and integration tests.

### Run all tests:

```sh
npm run test
```

### Run tests for a specific package (e.g., `ui`):

```sh
npm run test --workspace=packages/ui
```

### Fixing Jest Issues

If you encounter an error like:

```
Test environment jest-environment-jsdom cannot be found.
```

You need to install `jest-environment-jsdom`:

```sh
npm install -D jest-environment-jsdom
```

---

## 🌐 WebSockets

The project uses **WebSockets** to provide real-time updates.  
WebSocket URL:

```
wss://fe-challenge.cicadatech.net/live-data
```

The system **automatically reconnects** if the connection is lost.

---

## 📜 Development Guidelines

### 🧩 Creating New UI Components

All UI components must follow these guidelines:

1. Components must be placed in `packages/ui/`
2. Unit tests must be included in `packages/ui/src/__tests__/`
3. Must use **TypeScript** and be written in **TSX**
4. CSS styles should be written in **SCSS** (in `packages/ui/styles/`)

### 📌 Adding a New Package

To add a new shared package:

```sh
npm create package packages/new-package
```

---

## 📌 Commit Message Convention

This project follows the **Conventional Commits** specification to maintain a clean and structured commit history.

### ✅ Commit Format:

```
<type>(<scope>): <description>
```

#### **Commit Types:**
- `feat`: Introduces a **new feature**  
- `fix`: Fixes a **bug**  
- `docs`: Updates **documentation**  
- `style`: Code style changes (no logic changes)  
- `refactor`: Code refactoring (no feature or bug fix)  
- `test`: Adds or updates tests  
- `chore`: Updates build process, dependencies, or scripts  

#### **Examples:**
✅ `feat(auth): Implemented user login system`  
✅ `fix(ui): Fixed button alignment issue`  
✅ `docs(readme): Updated installation steps`  
✅ `chore(deps): Updated dependencies`  

**How to enforce this convention?**  
We use **Husky + Commitlint** to automatically validate commit messages.

To install:

```sh
npm install -D husky @commitlint/{config-conventional,cli}
```

Then, add this in `package.json`:

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

---

## 📬 Contributing

🚀 **Pull Requests**  
1. **Fork** the repository  
2. **Create a new branch**:  
   ```sh
   git checkout -b feature/new-feature
   ```
3. **Make your changes and commit them**:  
   ```sh
   git commit -m "feat(ui): Added new button component"
   ```
4. **Push the branch**:  
   ```sh
   git push origin feature/new-feature
   ```
5. **Create a Pull Request (PR)** in GitHub.

🐞 **Reporting Issues**  
If you find a bug, please open an **Issue** and provide detailed information.

---

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it.

---

## 🎉 Thanks for contributing! 🚀

