const mongoose = require("mongoose");

// MongoDB connection string
const DB = "mongodb+srv://umer:V8bAdTN0koYmqz8U@cluster0.3323szi.mongodb.net/mernstack?retryWrites=true&w=majority";


mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
}).then(() => {
  console.log("MongoDB connection established successfully");
}).catch((error) => {
  console.log("Error connecting to MongoDB:", error.message);
});

