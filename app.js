const express = require("express")
const app = express()
const PORT = process.env.PORT || 2000

app.get('/', (req, res)=>{
    res.send("<h1>Heroku trial Deployment</h1>")
})


app.listen(PORT, ()=>{
    console.log("Server started at " + PORT)
})
