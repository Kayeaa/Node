let express = require('express');
const app = express();

app.listen(8000, function() {
    console.log('Listening on port 8000.')
});

app.get('/', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send('Hello World');
});

app.get('/time', function(request, response){
    let now = new Date;
    
    let hours = now.getHours().toString().padStart(2,'0');
    let minutes = now.getMinutes().toString().padStart(2,'0');
    let seconds = now.getSeconds().toString().padStart(2,'0');

    response.setHeader('Content-Type', 'text/html');
    response.send(hours +':'+minutes+'.'+seconds+'.');
})