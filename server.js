var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    expressValidator = require('express-validator');


/*Set EJS template Engine*/
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(expressValidator());

/*MySql connection*/
var connection  = require('express-myconnection'),
    mysql = require('mysql');

app.use(

    connection(mysql,{
        host     : 'localhost',
        user     : 'root',
        password : '',
        port : '3306',
        database : 'activiti',
        debug    : false //set true if you wanna see debug logger
    },'request')

);

app.get('/',function(req,res){
    res.send('Welcome');
});

// submit the attribute form route
app.get('/submit', function(req, res){

    var fs = require('fs');
    var path = require('path');
    var val = req.query.value;
    var filePath = path.join(__dirname, '/xml/' + val + '.xml');
      fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        res.send(data);
      });

  });

  // event route
  app.get('/event', function(req, res){
    var fs = require('fs');
    var path = require('path');
    var val = req.query.value;
    var filePath = path.join(__dirname, '/xml/' + val + '.xml');
      fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        res.send(data);
      });
  });

  // attribute route
  app.get('/attribute', function(req, res){
    var fs = require('fs');
    var path = require('path');
    var val = req.query.value;
    var filePath = path.join(__dirname, '/textbox/' + val + '.html');
      fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        res.send(data);
      });
  });

  // elements route
  app.get('/elements', function(req, res){
    var fs = require('fs');
    var path = require('path');
    var val = req.query.value;
    var filePath = path.join(__dirname, '/elements/' + val + '.html');
      fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        res.send(data);
      });
  });

//RESTful route
var router = express.Router();


/*------------------------------------------------------
*  This is router middleware,invoked everytime
*  we hit url /api and anything after /api
*  like /api/user , /api/user/7
*  we can use this for doing validation,authetication
*  for every route started with /api
--------------------------------------------------------*/
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

var curut = router.route('/user');


//show the CRUD interface | GET
curut.get(function(req,res,next){


    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM sensors',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('user',{title:"Read Sensors",data:rows});

         });

    });

});
//post data to DB | POST
curut.post(function(req,res,next){

    //validation
    req.assert('sensor_id','ex:Temp-001').notEmpty();
    req.assert('type','ex:Temp, CO').notEmpty();
    req.assert('location_x','Enter location x').notEmpty();
    req.assert('location_y','Enter location y').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    //get data
    var data = {
        sensor_id:req.body.sensor_id,
        type:req.body.type,
        location_x:req.body.location_x,
        location_y:req.body.location_y
     };

    //inserting into mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO sensors set ? ",data, function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });

});


//now for Single route (GET,DELETE,PUT)
var curut2 = router.route('/deploy/:id');

/*------------------------------------------------------
route.all is extremely useful. you can use it to do
stuffs for specific routes. for example you need to do
a validation everytime route /api/deploy/:id it hit.

remove curut2.all() if you dont want it
------------------------------------------------------*/
curut2.all(function(req,res,next){
    console.log("You need to smth about curut2 Route ? Do it here");
    console.log(req.params);
    next();
});

//get data to update
curut2.get(function(req,res,next){

    var id = req.params.id;

    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("SELECT * FROM sensors WHERE id = ? ",[id],function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            //if user not found
            if(rows.length < 1)
                return res.send("User Not found");

            res.render('edit',{title:"Edit Sensors",data:rows});
        });

    });

});

//update data
curut2.put(function(req,res,next){
    var id = req.params.id;

    //validation
    req.assert('sensor_id','ex:Temp-001').notEmpty();
    req.assert('type','ex:Temp, CO').notEmpty();
    req.assert('location_x','Enter location x').notEmpty();
    req.assert('location_y','Enter location y').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    //get data
    var data = {
        sensor_id:req.body.sensor_id,
        type:req.body.type,
        location_x:req.body.location_x,
        location_y:req.body.location_y
     };

    //inserting into mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("UPDATE sensors set ? WHERE id = ? ",[data,id], function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });

});

//delete data
curut2.delete(function(req,res,next){

    var id = req.params.id;

     req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("DELETE FROM sensors  WHERE id = ? ",[id], function(err, rows){

             if(err){
                console.log(err);
                return next("Mysql error, check your query");
             }

             res.sendStatus(200);

        });
        //console.log(query.sql);

     });
});

var curut3 = router.route('/deploy');

//show the CRUD interface | GET
curut3.get(function(req,res,next){


    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM sensors',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('deploy',{title:"Deploy Sensors",data:rows});

         });

    });

});

//now we need to apply our router here
app.use('/api', router);

//start Server
var server = app.listen(3000,function(){

   console.log("Listening to port %s",server.address().port);

});