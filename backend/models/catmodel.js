const mongoose = require("mongoose");
const catmodel = mongoose.model("Category", new mongoose.Schema({
    catname: { type: String, required: true }
}))
module.exports = catmodel