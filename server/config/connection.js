const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/deep-thoughts",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .catch((err) => console.log(err.reason));

module.exports = mongoose.connection;
