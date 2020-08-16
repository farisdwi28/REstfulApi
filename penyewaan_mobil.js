const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.urlencoded({extended : true}))

const koneksi = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'penyewaan_mobil'
})

function pick(query,callback){
	koneksi.query(query,function(err,result){
		if(err) throw err;
		var datetime = new Date();
		console.log(datetime + " : Request : " + query);
		callback(result);
	})
}

function edit(query,callback){
	koneksi.query(query,function(err,result){
		if(err) throw err;
		var datetime = new Date();
		console.log(datetime + " : Request : " + query);
		callback(result);
	})
}

app.post("/penyewaan",function(req,res){
	edit(req.body.query,function(result){
		res.send(result);
	});
})

app.post("/mobil",function(req,res){
	pick(req.body.query,function(result){
		res.send(result);
	});
})

app.listen(8000, () => {
    console.log("Run on port 8000")
})
