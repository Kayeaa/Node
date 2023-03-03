const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongo = require("mongodb");

const url = 'mongodb://127.0.0.1:27017/';

const app = express();
app.listen(8000);

app.use('/', express.static(__dirname + "/httproot"));
app.use(express.urlencoded({extended:false}));

let responseToClient, dbMongoConnection;

app.get('/movies', clientConnection);

app.post('/movies', 
    function (request, response) {
        MongoClient.connect(url, 
            function (err, dbMongo) {
                const dbMedia = dbMongo.db("Media");
                let newMovie = { 
                    Series_Title: request.body.titre, 
                    Released_Year: request.body.annee 
                };
                dbMedia.collection("Movies").insertOne(newMovie, 
                    function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    response.redirect("/movies");
                    });
            });
});

app.get('/movies/:id', 
    function (request, response) {
        MongoClient.connect(url, 
            function (err, dbMongo) {
                const dbMedia = dbMongo.db("Media");
                let query = { _id: mongo.ObjectId(request.params.id) };
                dbMedia.collection("Movies").find(query).toArray(
                    function (err, resultFromDB) {
                        response.setHeader('Content-Type', 'application/json');
                        response.send(JSON.stringify(resultFromDB[0]));
                        dbMongo.close();
                    });
            });
    });

app.delete('/movies/:id', 
    function (request, response) {
        MongoClient.connect(url, 
            function (err, dbMongo) {
                const dbMedia = dbMongo.db("Media");
                const query = { _id: mongo.ObjectID(request.params.id.replace(":", "")) };
                dbMedia.collection("Movies").deleteOne(query, 
                    function(err, result) {
                        if (err) throw console.log(err);
                        response.send("deleted");
                     });
            });
});
   

function clientConnection(request, response) {
    responseToClient = response;
    MongoClient.connect(url, dbConnection);
}

function dbConnection(err, dbMongo) {
    dbMongoConnection = dbMongo;
    const dbMedia = dbMongo.db("Media");
    dbMedia.collection("Movies").find({}).toArray(responseQuery);
   }

function responseQuery (err, resultFromDB) {
    let resultToSend="<html><head><script src='fetchDetail.js'></script></head><body>" ;
    for(let i=0; i<10; i++){
        resultToSend += `<a href=javascript:getDetails('${resultFromDB[i]._id}')>${resultFromDB[i].Series_Title}</a><br />`;
    }
    resultToSend += "<div id='movieDetail'></div><a href='createMovie.html'>Ajouter un film</a></body></html>";
    responseToClient.setHeader('Content-Type', 'text/html');
    responseToClient.send(resultToSend);
    dbMongoConnection.close();
}