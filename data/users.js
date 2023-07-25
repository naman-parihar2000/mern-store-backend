const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User 1',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: true,
    },
    {
        name: 'Admin User 2',
        email: 'admin1@email.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: true,
    },
    {
        name: 'non-Admin User',
        email: 'admin2@email.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: false,
    }
]

module.exports = users 