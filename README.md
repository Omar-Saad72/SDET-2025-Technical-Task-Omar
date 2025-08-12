# 🧪 SDET 2025 Technical Task

This repository contains 4 separate testing tasks:

1. **Task 1 – Acme Chemicals - Web Automation with Nightwatch**
2. **Task 2 – LinkedIn Registration Page - Web Automation with Nightwatch**
3. **Task 3 – My Store Search Page - Web Automation with Nightwatch**
4. **Task 4 – Mock User Auth API - API Testing with SuperTest** 

Each task is located in its own folder and can be run independently.  
Only `.js` files are included in this repository.

---

## 📂 Folder Structure
```
task1-achme-chemicals/
task2-linkedin/
task3-my-store/
task4-mock-user-auth/
```

---

## 📌 Prerequisites
Before running any task, make sure you have:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)
- Google Chrome browser (for Nightwatch tests
- All instructions for installation of nightwatch and how to use can be found on the site: [NightWatch](https://nightwatchjs.org/)
- For Task#4 you will need to install [mock-user-auth](https://www.npmjs.com/package/mock-user-auth) and [supertest]([https://www.npmjs.com/package/supertest])

---

## 1️⃣ Task 1 – Acme Chemicals - Web Automation with Nightwatch

**Description:**  
<img width="1179" height="428" alt="image" src="https://github.com/user-attachments/assets/a049b742-a76e-4cbf-b338-cd91907ec01d" />


### Installation
```bash
cd task1-nightwatch
npm init nightwatch

```

### Running Tests
- Run all tests:
```bash
npx nightwatch
```
- Run a specific test:
```bash
npx nightwatch tests/exampleTest.js
```

---

## 2️⃣ Task 2 – LinkedIn Registration Page - Web Automation with Nightwatch

**Description:**  
<img width="1244" height="549" alt="image" src="https://github.com/user-attachments/assets/47fa7349-1d52-4bf5-80cf-33191fb88f7e" />


### Installation
```bash
cd task2-nightwatch
npm init nightwatch
```

### Running Tests
- Run all tests:
```bash
npx nightwatch
```
- Run a specific test:
```bash
npx nightwatch tests/exampleTest.js
```

---

## 3️⃣ My Store Search Page - Web Automation with Nightwatch

**Description:**  
<img width="971" height="425" alt="image" src="https://github.com/user-attachments/assets/892e8e8c-36e3-41b0-b9fd-8df0a6c90452" />


### Installation
```bash
cd task3-nightwatch
npm init nightwatch
```

### Running Tests
- Run all tests:
```bash
npx nightwatch
```
- Run a specific test:
```bash
npx nightwatch tests/exampleTest.js
```

---

## 4️⃣ Task 4 – Mock User Auth API - API Testing with SuperTest

**Description:**  
<img width="1074" height="759" alt="image" src="https://github.com/user-attachments/assets/79da5677-aa94-4ca3-ba7a-8b8cb8a9fb16" />

### Installation
```bash
cd task4-supertest
npm install supertest --save-dev
```

### Running Tests
- Run all tests (with npm script):
```bash
npm test
```
- Run tests with Jest directly:
```bash
npx jest
```

---

## 📝 Notes
- Each task is **independent**. Install dependencies inside the task folder you want to run.
- All tests are written in JavaScript.

---

## 📄 License
This repository is for technical task purposes only.
