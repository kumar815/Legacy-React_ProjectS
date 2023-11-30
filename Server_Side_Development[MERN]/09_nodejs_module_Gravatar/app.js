const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const uuid = require('uuid');

// User
let user = {
    name: 'anand',
    email: 'anandkumarinfo3@gmail.com',
    password: 'asas9900'
}

// Encrypt the password
let salt = bcrypt.genSaltSync(10);
let hashpassword = bcrypt.hashSync(user.password, salt); // Store the hashed password

// Get Gravatar image
let image = gravatar.url(user.email, {
    s: '200',
    r: 'pg',
    d: 'mm'
});

let updatedUser = {
    id: uuid.v4(),
    ...user,
    image: image
}

console.log(updatedUser);

let isMatch = bcrypt.compareSync('asas9900', hashpassword);
if (isMatch) {
    console.log('Login is successful');
} else {
    console.log('Invalid Credentials');
}