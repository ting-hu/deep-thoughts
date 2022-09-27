const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/deep-thoughts",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => console.log(err.reason));

module.exports = mongoose.connection;
