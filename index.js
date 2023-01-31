const { ValidationErrorItem } = require("sequelize");

module.exports = class SequelizeValidationMessages {
    static splitByParams(sequelizeValidationError, ...params) {

        let errors = {};

        //generate params object
        for (let param of params) {
            errors[param] = [];
        }

        if (sequelizeValidationError.name === 'SequelizeValidationError') {
            for (let error of sequelizeValidationError.errors) {
                if (error instanceof ValidationErrorItem) {
                    errors[error.path].push(error.message);
                }
            }
        }

        return errors;
    }
}
