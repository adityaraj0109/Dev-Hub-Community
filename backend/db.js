const mongoose = require("mongoose");

const url =
  "mongodb+srv://Aditya:aditya12345@cluster0.llmhl7x.mongodb.net/dev-hub-community?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
