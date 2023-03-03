let express= require('express');
let app = express();

app.use('/', express.static(__dirname+'/httproot'));

app.listen(8000, function(){
    console.log('Listening to port 8000.');
})

app.get('/', function(request, response){
    response.setHeader('Content-Type', 'text/html');

    let montant;
    if (request.query.montant===undefined) montant= 100;
    else(montant = request.query.montant)
    let montanteneuro = Math.round(request.query.montant*0.90/100)/100;

    response.send(montant+' dollars = '+ montanteneuro+'euros')
})