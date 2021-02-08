const express = require('express')
const cors = require('cors')

// Config
const app = express()
const port = process.env.PORT || 9000
app.use(express.json());
app.use(cors())

require('./server/config/mongoose.config');
require('./server/routes/dbMessages.routes')(app);

// Listen
app.listen(port, () => console.log(`Listening on port ${port}`))