const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json({extended: true}))
app.use('/api/authorization', require('./routes/authorization.routes'))
app.use('/api/tutor',require('./routes/tutor.routes'))


const PORT = config.get('port') || 5000

async function start(){
try {
await mongoose.connect(config.get('mongoURI'), {

})
}catch (e){
    console.log('error', e.message)
    process.exit(1)
}
}
start()

app.listen(PORT,() => console.log(`app started on port ${PORT}`))
