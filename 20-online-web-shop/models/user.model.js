const bcrypt = require('bcryptjs');
const database = require("../data/database");

class User {
  constructor(email, password, fullname, street, postal, city) {
    this.email = email;
    this.password = password;
    this.name = fullname;
    this.addres = {
      street: street,
      postal: postal,
      city: city,
    };
  }
  async signup(){
    const hashedPassword = await bcrypt.hash(this.password, 12)
    await database.getDb().collection('users').insertOne({
      email: this.email,
      password: hashedPassword,
      name: this.name,
      addres: this.addres
    })
  }
}

module.exports = User