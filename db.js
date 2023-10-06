const mongoose = require('mongoose');
const dbUrl="mongodb+srv://pratham_18:Covid19123@cluster0.83qj4ft.mongodb.net/?retryWrites=true&w=majority";

const dbConnection=mongoose.connect(dbUrl).then(()=>{
  console.log("MongoDb connected");
}).catch((e)=>{
  console.log(e);
});

module.exports = dbConnection;