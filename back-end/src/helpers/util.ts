const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashPassword = async (plainPassword: string) => {
  try {
    return bcrypt.hash(plainPassword, saltRounds);
  } catch (err) {
    console.log(err);
  }
};
