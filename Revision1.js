let express = require('express');
let app = express();

app.listen(8000, function(){
    console.log('Lstening on port 8000.');
});

app.get ('/change20dollars', function(request, response){
    response.setHeader('Content-Type', 'text/html');
    let montanteneuro = 20*0.94;
    response.send('20 dollars = '+ montanteneuro+'euros')
});
