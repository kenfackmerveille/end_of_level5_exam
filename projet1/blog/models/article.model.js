const mongoose = require("mongoose");
const { Schema } = mongoose;

  const articleSchema = Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    tags:{
        type:String,
    },
    status:{
        type:String,
        require:true
    },
    created_at:{
        type:String,
        require:false
    }
  });

  const article = mongoose.model("article", articleSchema);
  article.createCollection();

  module.exports = article;