const { Console } = require('console');
let http = require('http');

let httpServer = http.createServer(newClientCallback);

httpServer.listen(8000);

function newClientCallback(request, response){
    let dateNow = new Date();
    console.log(dateNow);

    twoFirstCaracter = request.headers['accept-language'].substring(0,2);
    let header = {'content-type':'text/html; charset=utf-8'};
    response.writeHead(200, header);

    if (twoFirstCaracter == 'es') response.end('<h1 style="font-family:courier;">Buenos día mundo</h1> <p><strong> '+dateNow.getDate()+'/'+ (dateNow.getMonth()+1) +'/'+ dateNow.getFullYear()+'.'+'<br>Son las '+ dateNow.getHours() +':' + dateNow.getMinutes() +'.</string></p>');
    else if (twoFirstCaracter =='fr') response.end ('Bonjour Monde');
    else response.end('Hello World');
}
