const express = require('express');
const res = require('express/lib/response');
const app = express();

//route and callback  here is known as route handler       
app.get('/', (req,res)=> {
    
    res.send("Hello World!!!")

})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening at port ${port}`))
