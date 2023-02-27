

const mongoose = require('mongoose')


const postSchema = mongoose.Schema(
  {
    titre: {type: String, required: true},
    contenu : {type: String, required: true}
  }
)

module.exports = mongoose.model('Post', postSchema)
