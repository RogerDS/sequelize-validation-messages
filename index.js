module.exports = class SequelizeValidationMessages {
    static splitByParams(sequelizeValidationError, ...params) {
        let errors = {};

        for (let param of params) {
            errors[param] = [];
        }

        if (sequelizeValidationError.name === 'SequelizeValidationError') {
            for (let error of sequelizeValidationError.errors) {
                if (error.constructor.name === 'ValidationErrorItem') {
                    errors[error.path].push(error.message);
                }
            }
        }

        return errors;
    }
}
