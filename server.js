const express = require('express')
 
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json({limit: '1000mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(express.static( __dirname +'/'));
app.get('/*', (req, res) => {
   res.sendFile(__dirname+'/build/index.html')
    })
   
app.listen(port, () => {
 
 
 console.log(`Example app listening at http://localhost:${port}`)})