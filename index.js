const express = require('express')
const path = require('path')
const PORT = 3000
const app = express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'templates'))

app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'routes/pics')))




app.listen(PORT,(err)=>{
    if(err)
        console.log("ERROR!");
    console.log(`Server listening at http://localhost:${PORT}`)
})


