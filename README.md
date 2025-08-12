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

<img width="1170" height="416" alt="image" src="https://github.com/user-attachments/assets/421270cf-d8c0-43aa-a2bf-9774b8fc0dbc" />


### Installation & Running Tests
```bash
cd task1-achme-chemicals
npm -y init
npm install nightwatch
npx nightwatch
```

---

## 2️⃣ Task 2 – LinkedIn Registration Page - Web Automation with Nightwatch

**Description:**  

<img width="1076" height="490" alt="image" src="https://github.com/user-attachments/assets/e7c4b0d3-abee-4d93-b23b-4bccf07792c4" />


### Installation & Running Tests
```bash
cd task2-linkedin
npm -y init
npm install nightwatch
npx nightwatch
```

---

## 3️⃣ My Store Search Page - Web Automation with Nightwatch

**Description:**  

<img width="838" height="383" alt="image" src="https://github.com/user-attachments/assets/40d42c4b-8f65-4784-8e20-b580cc48eff6" />


### Installation & Running Tests
```bash
cd task3-my-store
npm -y init
npm install nightwatch
npx nightwatch
```

---

## 4️⃣ Task 4 – Mock User Auth API - API Testing with SuperTest

**Description:**  

<img width="939" height="682" alt="image" src="https://github.com/user-attachments/assets/07d97483-66be-4efd-9142-2d6a04e225d3" />


### Installation & Running Tests
```bash
cd task4-mock-user-auth/
npm -y init
npm install concurrently supertest mock-user-auth
npm pkg set scripts.dev="nodemon ./node_modules/mock-user-auth/bin/www.js"
npm pkg set scripts.start-and-test="concurrently --kill-others \"npm run dev\" \"npx jest\""
npm run start-and-test
```

---

## 📌 CircleCI Status Badge

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/PEZfmoqcLN5YUzb4dxY2Dd/5zTuuNCoLNF5a1DTasR23Z/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/PEZfmoqcLN5YUzb4dxY2Dd/5zTuuNCoLNF5a1DTasR23Z/tree/main)


---
## 📝 Notes
- Each task is **independent**. Install dependencies inside the task folder you want to run.
- All tests are written in JavaScript.

---

## 📄 License
This repository is for technical task purposes only.
