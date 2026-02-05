
// class LoginPage {

//     async getUsername() {
//         const primary = $('#username');
//         if (await primary.isExisting()) return primary;
//         return $('input[name="username"]');
//     }

//     get password() {
//         return $('#password');
//     }

//     get loginButton() {
//         return $('button[type="submit"]');
//     }

//     get flashMessage() {
//         return $('#flash');
//     }

//     async open() {
//         await browser.url('https://the-internet.herokuapp.com/login');
//     }

//     async login(user, pass) {
//         const userField = await this.getUsername();
//         await userField.setValue(user);
//         await this.password.setValue(pass);
//         await this.loginButton.click();
//     }
// }

// module.exports = new LoginPage();
const { heal } = require('../utils/s_heal_engine.js');

class LoginPage {

    async username() {
        return await heal('#username', 'Username');
    }

    async password() {
        return await heal('#password', 'Password');
    }

    async loginButton() {
        return await heal('button[type="submit"]', 'LoginButton');
    }

    get flashMessage() {
        return $('#flash');
    }

    async open() {
        await browser.url('https://the-internet.herokuapp.com/login');
    }

    async login(user, pass) {
        const userEl = await this.username();
        const passEl = await this.password();
        const btn = await this.loginButton();

        await userEl.setValue(user);
        await passEl.setValue(pass);
        await btn.click();
    }
}

module.exports = new LoginPage();
