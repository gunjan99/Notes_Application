const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
}, {
    timestamps: true        // This option is used for created at and updated at
});

module.exports = mongoose.model('Note', NoteSchema);