var router = require('express').Router();
var fs = require('fs');
var AWS = require('aws-sdk');
AWS.config.aregion ="us-west-2";
//var config = require('../configure/private.config');
module.exports = router;
//Amazon AWS credentials
AWS.config.update({accessKeyId: process.env.KEY ,secretAccessKey: process.env.SECRET});


router.post('/image', function(req, res, next){
console.log(req.body, "files")
        fs.readFile(req.files.file.path, function(err, data){
                if (err) { throw err; }
                var filename = req.files.file.name;
                console.log(filename,"filename");

                var s3 = new AWS.S3();
                var params = {Bucket:'supermesh', Key: filename, Body: data, ACL: 'public-read'};
                s3.putObject(params, function(err, file){
                        if(err)
                                console.log(err);

                        else
                                res.json(filename);
                                console.log("Successfully uploaded");

                })
        });



})
