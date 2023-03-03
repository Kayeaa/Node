const { Console } = require('console');
let http = require('http');

let httpServer = http.createServer(newClientCallback);

httpServer.listen(8000);

function newClientCallback(request, response){
    let header = {'content-type':'text/html; charset=utf-8'};
    response.writeHead(200, headerToSendToClient);

    let dateNow = new Date();

    let currentHourObject = new Object();
    
    currentHourObject.hours = dateNow.getHours().toString().padStart(2,'0');
    currentHourObject.minutes = dateNow.getMinutes().toString().padStart(2,'0');
    currentHourObject.seconds = dateNow.getSeconds().toString().padStart(2,'0');

    response.end(JSON.stringify(currentHourObject));
}
