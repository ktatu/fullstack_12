const mongoose = require("mongoose")
const redis = require("../redis")
const Todo = require("./models/Todo")
const { MONGO_URL } = require("../util/config")

if (MONGO_URL && !mongoose.connection.readyState)
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

console.log("123 ", MONGO_URL)
module.exports = {
    Todo,
}
