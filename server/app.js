const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");

// To deal with CORS protocol issue for localhost
const cors = require("cors");
app.use(cors());

const User = require('./models/user');
const Message = require('./models/message');

const url = "mongodb://127.0.0.1:27017/quill";
mongoose.connect(url)
    .then(() => {
        console.log("Mongo connection opened");
    })
    .catch(err => {
        console.error(err);
    })

app.use(express.urlencoded({extended: true}));

// const sessionConfig = {
//     secret: 'tobechanged',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,
//         expires: Date.now() +  60 * 60 * 24 * 7 * 14,
//         maxAge: 60 * 60 * 24 * 7 * 14
//     }
// }
// app.use(session(sessionConfig));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.get('/test', async (req, res) => {
    const messages = await Message.find({});
    res.send(messages);
})

app.listen(3000, () => {
    console.log("Listening on 3000")
})