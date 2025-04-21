const { body } = require("express-validator")


validateRegister = (req,user) => {
return [
    body('username', 'username does not Empty').not().isEmpty(),
    body('username', 'username must be Alphanumeric').isAlphanumeric(),
    body('username', 'username more than 6 degits').isLength({ min: 6 }),
    body('email', 'Invalid does not Empty').not().isEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'password more than 6 degits').isLength({ min: 6 })
];
}
validateLogin = () => {
return [ 
    body('email', 'Invalid does not Empty').not().isEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'password more than 6 degits').isLength({ min: 6 })
]; 
}
module.exports = {
    validateRegister,
    validateLogin
}
