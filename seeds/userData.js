const { User } = require('../models');

const userdata = [
  {
    username: "John Doe",
    email: "John.Doe@mail.com",
    password: "Password123"
  },
  {
    username: "Jane Doe",
    email: "Jane.Doe@mail.com",
    password: "Password123"
  },
  {
    username: "Phil Holden",
    email: "pholden@mail.com",
    password: "Password123"
  },
];

const seedUsers = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;