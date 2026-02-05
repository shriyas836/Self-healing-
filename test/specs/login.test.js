// const LoginPage = require('../pageobjects/login.page');
// const assert = require('assert');

// describe('Self Healing Login Test', () => {

//     it('should login successfully with valid credentials', async () => {
//         await LoginPage.open();
//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');

//         const message = await LoginPage.flashMessage.getText();
//         assert(message.includes('You logged into a secure area'));
//     });

// });
const LoginPage = require('../pageobjects/login.page');
const assert = require('assert');

describe('Self Healing Login Test', () => {

    it('should login successfully with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');

        const message = await LoginPage.flashMessage.getText();
        assert(message.includes('You logged into a secure area'));
    });

});
