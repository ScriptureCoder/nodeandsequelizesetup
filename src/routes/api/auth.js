const Authentication = require('../../controllers/authentication');
module.exports = (app) => {
    app.get('/login', Authentication.login)
};