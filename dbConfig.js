const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Rajesh:Rajesh12345@cluster0.sc8ug.mongodb.net/pizza-delivery-app",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;
