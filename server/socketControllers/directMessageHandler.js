const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const { updateChatHistory } = require("./notifyConnectedSockets");
var natural = require('natural');
const { getServerSocketInstance } = require("../socket/connectedUsers");

var tokenizer = new natural.WordTokenizer();

const negativeWords = [
    'muji',
    'machikni',
    'randi',
    'shit',
    'bullshit',
    'fuck',
    'fucking',
    'fucker',
    'fuckers',
    'geda',
    'lado',
    'puti',
    'khatey',
    'jathi',
    'jatho',
    'sale',
    'rando'
  ]

const directMessageHandler = async (socket, data) => {
    try {
        
        const { receiverUserId, message } = data;
        const negativeMsg = tokenizer.tokenize(message)
        const isnegativeMsg = negativeWords.filter(element => negativeMsg.includes(element));
        if(isnegativeMsg.length > 0 ){
            updateChatHistory('rand', null,true);
        }
        const senderUserId = socket.user.userId;
        console.log(senderUserId, receiverUserId)
        const newMessage = await Message.create({
            author: senderUserId,
            content: message,
            type: "DIRECT"
        })


        // check if conversation between sender and receiver already exists

        const conversation = await Conversation.findOne({
            participants: { $all: [receiverUserId, senderUserId] },
        });

        // if conversation exists, append the message to the conversation 
        if (conversation) {
            console.log('conversation already exists');
            
            conversation.messages = [...conversation.messages, newMessage._id];
            await conversation.save();

            // update the chat history of the participants
            updateChatHistory(conversation._id.toString());

        } else {
            console.log("creating new conversation")
            // create conversation
            const newConversation = await Conversation.create({
                participants: [senderUserId, receiverUserId],
                messages: [newMessage._id],
            });

            // update the chat history of the participants
            updateChatHistory(newConversation._id.toString());
        }


    }catch(err) {
        console.log(err)
    }
}


module.exports = directMessageHandler;