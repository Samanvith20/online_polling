const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 1000
const {MONGO_URI} = require('./keys')



mongoose.connect(MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false })

mongoose.connection.on('connected',()=>{
    console.log("mongodb is connected");
})


require('./models/user')
require('./models/post')
require('./models/students')

app.use(express.json())
app.use(cors())
// app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))
app.use(require('./routes/student'))


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})