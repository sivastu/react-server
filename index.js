const http = require('http')

const server = http.createServer((req,res)=>{
	res.end()
})

server.listen('8000','localhost',()=>{
	console.log('worked')
})