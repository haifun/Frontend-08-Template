const http = require('http')

http.createServer((request, response) => {
  let body = []
  request.on('error', (err) => {
    console.log(err)
  }).on('data', (data) => {
    body.push(data.toString())
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    console.log('body:', body)
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end('Hello World \n')
  })
}).listen(8081)

console.log('server started')
