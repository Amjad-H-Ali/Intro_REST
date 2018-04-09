const express = require('express');
const app = express();



const fruits = ['apple','banana','orange'];

//lets make an index route
app.get('/fruits', (req,res)=>{
	res.send(fruits);
})



app.listen(3000,()=>{
	console.log('Server is listening');
})