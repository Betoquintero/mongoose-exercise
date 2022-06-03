const mongoose = require('mongoose');
const User = require('./models/User');
const data = require('./data.js');
const MONGO_URI = 'mongodb://localhost:27017/app';

mongoose.connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to ${x.connection.name} database`);
  })
  .then(() => {
    return User.create({name: 'Luis', email: 'luis@hola.world', age:1, programmingLevel: 'advanced', date: 03/02/2022 })
  })
  .then((user) => {
    Iteration 2
    console.log('Created: ', user)
  })
  .then(() => {
    // Iteration 3
    const user = User.findOne({name:'luis'});
    return user;
  })

  .then(() => {
    // Iteration 3
    return User.findOneAndUpdate({name: 'Luis'}, {age:3})  
  })

  .then((user) => {
    // Iteration 3
    console.log('Edited: ', user)      
  })
  
  .then(() => {
    // Iteration 4
    return User.create (data)
  })
  .then((users) => {
    // Iteration 4
    console.log('Created: ', users)
  })
  .then(() => {
    // Iteration 5
    return User.findOneAndDelete({email:'pepe@gmail.com'})
  })
  .then((user) => {
    // Iteration 5
    console.log('Deleted: ', user)
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => {console.log(err)})