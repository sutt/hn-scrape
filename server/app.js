const express = require('express')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()


const port = 3003
const fn =   'output.json'

app.use(cors())
// app.use(express.json())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.bodyParser({limit: '50mb'}))


function writeOut(data = "", f = './'+fn) {
    fs.writeFile(f, data, () => {console.log('success?')})
}
// test
const demo = {myObj:true, you:"a string"}
writeOut(data=JSON.stringify(demo))


app.get('/', (req, res) => {
    console.log('hit the home route')
    res.send('working')
})

app.post('/filewrite', (req, res) => {
    
    const mydata = req.body    
    console.log(mydata)
    
    writeOut(data = JSON.stringify(mydata))
    
    let num = 0
    try {num = data.length} catch {num = 0}
    res.send(`loaded ${num} comments`)
})



app.listen(port, () => {console.log(`listening on port: ${port}`)})