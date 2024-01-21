// NOTE: DO NOT RUN THIS WITHOUT RUNNING userSeed.js FIRST!!!
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/quill";
const Message = require("../models/message");
const User = require("../models/user");

mongoose.connect(url)
    .then(() => {
        console.log("Mongo connection opened");
    })
    .catch(err => {
        console.error(err);
    })

const seedDB = async () => {
    const users = await User.find({});

    const msg1 = new Message({content: "hello world!", sender: users[0], recipient: users[1]});
    const msg2 = new Message({content: "whats up man, nothing much on my side", sender: users[1], recipient: users[0]});
    const msg3 = new Message({content: "bruh what", sender: users[0], recipient: users[1]});
    const msg4 = new Message({content: "what are you on man", sender: users[0], recipient: users[1]});

    const msgs = [msg1, msg2, msg3, msg4];
    for (const msg of msgs) {
        await msg.save();
        console.log(msg);
    }
}

seedDB().then(() => {
    console.log("Success!!");
    mongoose.connection.close();
})