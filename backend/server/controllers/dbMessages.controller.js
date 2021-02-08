const Message = require("../models/dbMessages.model")

module.exports.findAllMessages = (req,res) => {
    Message.find()
        .then(allMessages => res.json({results: allMessages}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.findOneMessage = (req, res) => {
    Message.findOne({_id: req.params.id})
        .then(oneMessage => res.json({results: oneMessage}))
        .catch(err => res.json(err));
}

module.exports.createNewMessage = (req, res) => {
    Message.create(req.body)
        .then(newMessage => res.json({results: newMessage}))
        .catch(err => res.json(err));
}

module.exports.updateMessage = (req, res) => {
    Message.updateOne({_id: req.params.id}, req.body,
        {
            runValidators: true,
            new: true,
            useFindAndModify: false
        })
        .then(updatedMessage => res.json({results: updatedMessage}))
        .catch(err => res.json(err));
}

module.exports.deleteMessage = (req, res) => {
    Message.deleteOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json(err));
}