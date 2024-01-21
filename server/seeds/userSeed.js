const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/quill";
const User = require('../models/user');

mongoose.connect(url)
    .then(() => {
        console.log("Mongo connection opened");
    })
    .catch(err => {
        console.error(err);
    })

const seedDB = async () => {
    const password = "123";
    await User.deleteMany({});
    
    const user1 = new User({username: "user1"});
    const user2 = new User({username: "user2"});
    const user3 = new User({username: "user3"});
    user1.friends.push(user2);
    user2.friends.push(user1, user3);
    user3.friends.push(user2);

    const users = [
        user1,
        user2,
        user3
    ];
    
    for (const user of users) {
        await User.register(user, password);
        console.log(user);
    }
}

seedDB().then(() => {
    console.log("Success!");
    mongoose.connection.close();
})