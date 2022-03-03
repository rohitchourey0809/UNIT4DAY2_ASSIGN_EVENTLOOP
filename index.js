const express = require('express');
// console.log(express)
const app = express();
// console.log(app)
// console.log(app)
//REST APIS =>Representation staet transfer

// callback function
app.get("/rootroute",function(req,res){
    // console.log("hello")
    res.send("hello")

    // res.send("Hello User kamal")
})

app.get("/books",function(req,res){
    res.send({
        Book1: "RohitChourey",
        Book2:"Pyaar Ki Kahani",
        Book3 : "Nayi purani",
        Book4:"Atomic Theory",
        Book5:"HERA",

    })
})




app.listen(5000,()=>{
    console.log('listening on port 5000')
})

console.log("chalo")