# sequelize-validation-messages

Make associative array with error messages from SequelizeValidationError class

## Quickstart

To extract error messages list from SequelizeValidationError class

**1. Install**

```shell
npm install sequelize-validation-messages
```

**2. Require SequelizeValidationMessages object**

```javascript
const SequelizeValidationMessages = require('sequelize-validation-messages');
```
**3. Use function splitByParams(sequelizeValidationError, ...params). Look at example:**

```javascript
const { Sequelize } = require('sequelize');
const SequelizeValidationMessages = require('sequelize-validation-messages');

//In async function
let errorMessages = {};

try {
    await User.create({
        name: 'Bob007',
        age: '16',
    });
} catch (error) {
    if (error instanceof Sequelize.ValidationError) {
        errorMessages = SequelizeValidationMessages.splitByParams(error, 'name', 'age');
        /*
            If validation for checking user's age set for over 18 years old, 
            and the name must consist only of a letter, 
            we get the following error messages in errorMessages variable:
            
            {
              name: ['Name must consist only of a letter'],
              age: ['Age must be over 18 years old']
            }
         */
    }
}
```
