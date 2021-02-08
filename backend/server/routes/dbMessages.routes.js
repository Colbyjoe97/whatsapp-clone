const messageController = require("../controllers/dbMessages.controller")

module.exports = app => {
    app.get('/', (req, res) => res.status(200).send('Hello World'))
    app.get("/api/messages/all", messageController.findAllMessages)
    app.post('/api/messages/new', messageController.createNewMessage)
    app.delete('/api/messages/delete/:id', messageController.deleteMessage)
}