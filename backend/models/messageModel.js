const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);

const Message = mongoose.model('Message', messageSchema);
Message.init();

Message.create({
  sender: '65563459937ea26132be7ce4',
  content: 'Hey! Shreyash wanna meet today evening ?',
  chat: '65564556bea2e4e656345ced',
});
module.exports = Message;
