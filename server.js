let express = require('express');
let bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
let path = require('path');

let app = express();
let db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get_markers', function(req,res){
    res.header('Access-Control-Allow-Origin', '*');
    db.collection('markers').find().toArray(function(err, docs){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});

app.post('/add_markers',function(req,res){

    let markersObj = {
        markers: req.body.state
    };

    res.header('Access-Control-Allow-Origin', '*');
    db.collection('markers').insert(markersObj, function(err,result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(markersObj);
    });

});


MongoClient.connect('mongodb://localhost:27017/map', function(err, database){
    if(err){
        return console.log(err);
    }
    db = database;
    app.listen(1337, function(){
        console.log('Api am started');
    });
});