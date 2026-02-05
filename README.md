# Self-Healing Automation Framework (WebdriverIO)

This project demonstrates a self-healing test automation framework using WebdriverIO.
The framework automatically handles locator changes during test execution.

## 📁 Project Structure

self-healing/
│── test/
│   ├── pageobjects/
│   │   ├── page.js
│   │   ├── login.page.js
│   │   └── secure.page.js
│   ├── specs/
│   │   ├── login.test.js
│   │   └── test.e2e.js
│   └── utils/
│       ├── s_heal_engine.js
│       ├── heal_store.js
│       └── healingStore.json
│
│── wdio.conf.js
│── package.json
│── package-lock.json
│── .gitignore
│── README.md

Self-Healing Implementation – What I Have Done in This Project

This project implements a custom self-healing mechanism in WebdriverIO to handle UI locator changes automatically during test execution.

#Problem with Normal Automation

In traditional automation, tests rely on hard-coded locators.
If an element’s locator changes (id, class, XPath), the test fails even though the application still works correctly.

#Normal Automation causes:

Frequent test failures

High maintenance effort

Unstable CI pipelines

#Core idea behind this:
Instead of depending on a single locator, my framework:

Tries the original locator first

If it fails, it intelligently searches for the same element again

Uses stored element attributes and DOM characteristics

Recovers automatically without breaking the test flow

This logic is implemented using a custom healing engine, not a third-party tool.
 
 
 #HOW TO RUN :
 npm install
npx wdio run wdio.conf.js
