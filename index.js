const express = require('express')
const serve = express()

const apps =()=>{
	console.log('not worked')
	serve.listen(3006,()=>{
		console.log('Server up and running 3006')
	})
}

const geet=()=>{
	console.log('worked')
	serve.get('/one',(req,res)=>{
		res.status(200).json({ message: "here is nedkjnenefyour public resource" });
	})
}


serve.get('/',(req,res)=>{
	res.status(200).json({ message: "public resource" });
})

module.exports = {
   apps,
   geet
}