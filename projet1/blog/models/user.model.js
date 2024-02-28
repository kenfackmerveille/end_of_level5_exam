const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
});

const User = mongoose.model("user", userSchema);
User.createCollection();

module.exports = User;