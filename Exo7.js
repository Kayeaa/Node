let express = require('express');
let app = express();

app.use('/', express.static(__dirname+"/httproot"));

app.listen(8000, function(){
    console.log('Listening on port 8000.');
});