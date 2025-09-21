const { body } = require('express-validator');

const validationSchema = () => {
    return [
        body('title')
            .notEmpty()
            .withMessage('title is require')
            .isLength({ min: 4 }),
        body('content')
            .notEmpty()
            .withMessage('content is require')
            .isLength({ min: 6 }),
    ]}
    module.exports = {validationSchema };