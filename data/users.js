const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User ',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: true,
    },
    {
        name: 'non-Admin User 1',
        email: 'nonadmin1@email.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: false,
    },
    {
        name: 'non-Admin User 2',
        email: 'nonadmin2@email.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: false,
    }
]

module.exports = users 