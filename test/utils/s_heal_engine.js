const fs = require('fs');
const path = require('path');

const healingFile = path.join(__dirname, 'healingStore.json');

function readStore() {
    if (!fs.existsSync(healingFile)) {
        fs.writeFileSync(healingFile, JSON.stringify({}, null, 2));
    }
    return JSON.parse(fs.readFileSync(healingFile));
}

function writeStore(data) {
    fs.writeFileSync(healingFile, JSON.stringify(data, null, 2));
}

async function heal(locator, name) {
    const store = readStore();

    // 1️⃣ Try healed locator first
    if (store[name]) {
        const healedEl = await $(store[name]);
        if (await healedEl.isExisting()) {
            console.log(`🧠 Using healed locator for ${name}`);
            return healedEl;
        }
    }

    // 2️⃣ Try original locator
    const originalEl = await $(locator);
    if (await originalEl.isExisting()) {
        return originalEl;
    }

    // 3️⃣ Auto fallback (basic logic)
    let newLocator = locator;
    if (locator.includes('#username')) newLocator = 'input[name="username"]';
    if (locator.includes('#password')) newLocator = 'input[type="password"]';

    store[name] = newLocator;
    writeStore(store);

    console.log(`🩹 Healed ${name} → ${newLocator}`);
    return $(newLocator);
}

module.exports = { heal };
