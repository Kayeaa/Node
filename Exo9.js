let express = require('express');
let app = express();

app.listen(8000, function(){
    console.log('Lstening on port 8000.');
});

app.get ('/change', function(request, response){
    response.setHeader('Content-Type', 'text/html');

    let montanteneuro = (request.query.montant*0.94*100)/100;
    response.send(montant+' dollars = '+ montanteneuro+'euros')
});
