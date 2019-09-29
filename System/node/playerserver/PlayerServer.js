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
var mqtt = require('mqtt')
var fs = require('fs');
var http = require('http')
var prompt = require('prompt')
var HashTable = new Map()//require('hashtable');
var randomstring = require("randomstring");
var colors = require('colors');
var walk  = require('walk');
const querystring = require('querystring');

process.argv.forEach(function (val, index, array) {
  console.log("ARGS: "+index + ': ' + val);
});

var unitsHashTable = new Map()
var unitDataHashTable = new Map()

setInterval(function(){
  // console.log(unitsHashTable.size())
  // console.log(unitDataHashTable.size())
}, 1000)

var db = require('diskdb')
db = db.connect("./", ['playerData'])

var sqlite3 = require('sqlite3').verbose();
var dbs = new sqlite3.Database(':memory:')

dbs.run("CREATE TABLE playerData (id INTEGER NOT NULL, data TEXT, PRIMARY KEY('id'))");
var playerRecordCount = 0
var dummyPlayerData = {"playerID": "dshunjkd89", "state": "aliveSS", "attackType": "portscan"}
const spawn = require('threads').spawn;
var ranFromDestination = "./"
//player vars
var channel = ""
var playerName = ""
var playerData = null
var myip = ""
var containersLeft = 3;
var wroteOpponentIP = false;

//client = mqtt.createClient(1883, 'localhost');
//client = mqtt.connect('mqtt://localhost');

myip = "insert your local IP" //"192.168.0.1";
playerName = process.argv[5];
channel = process.argv[6];
gameip = process.argv[7];

var client = mqtt.connect('mqtt://'+gameip+':1883', {keepalive: 3});
client.subscribe(channel);
client.subscribe(playerName+"HEALTH");

var epochTime = 0
var mainGameLoopSpeed = 500
var mainCheckpointSpeed = 2 //10
var units = []
//grap ip address, and game options
var schema = {
    properties: {
      playername: {
        pattern: /^[a-zA-Z]+$/,
        message: 'Alphanumeric only',
        required: true
      },
      opponent: {
        pattern: /^[a-zA-Z]+$/,
        message: 'alphanumeric only',
        required: true
      },
      ipaddress: {
        pattern: /^[0-9\-.]+$/,
        message: 'not a valid ipaddress...',
        required: true
      },
    }
  };


// Start the prompt
// prompt.start();

// Get two properties from the user: email, password
/*
prompt.get(schema, function (err, result) {
  // Log the results.
  //console.log('Player input received:');
  myip = result.ipaddress;
  playerName = result.playername;
  channel = result.opponent;
  //console.log(myip+" "+playerName+" "+channel)
  //to get oppenent data
  client.subscribe(channel);
  //client.subscribe(playerName);
  //to get own Health data
  client.subscribe(playerName+"HEALTH");
  beginGame()
}); 
*/

beginGame()

function beginGame(){
  var i = 0;  // dots counter
    /*

      TODO

      Read Flags, and register them to gameserver
      ///////////////////

      read all files in units, and per file name, get content, and give some name.
      this is built on the notion that when a player does Capture, he would be required to
      pass his own flag for the same unit container, and the opponents flag.

      But why, is it even required to pass their own flag, and even have to think
      about "what container is mine?"

      seems kind of unatural from a hacker perspective

      solution: we could just require sending opponents flag. The game server would be
      posed with handling, this is a cpture command, with F flag, and from P player

      does this flag belong to his opponent?, and is it accurate
      if YES, then change respective unit to EXACTLY 0 in health
    */

    var files = [];

    var walker  = walk.walk('../System/flags/', { followLinks: false });

    walker.on('file', function(root, stat, next) {
        // Add this file to the list of files
        files.push(root + '/' + stat.name);
        next();
    });

    walker.on('end', function() {
        var filesArr = []
        for (var f = 0; f < files.length; f++){
          var flagStr = files[f].substring(files[f].indexOf('//')+2) // First occurence of ?v=
          console.log( "Flag from inside beginGame() "+flagStr )
          filesArr.push(flagStr)
        }
        if(filesArr[0] == ".DS_Store"){
          filesArr.shift();
        }
        var flagData = {"playerName": playerName, "opponentName": channel, "flags": filesArr}
        Broadcast( client, "RegisterFlags", JSON.stringify(flagData) )
    });

    //for init of system action file
    fs.writeFile(ranFromDestination+"SystemAction/information", '{"playerName": "'+playerName+'","opponentName": "'+channel+'","state": "idle"}', function(err) {

    });


    // fs.readFile('../flags', (err, data) => {
    //
    //
    //   if (err) throw err;
    //   console.log(data);
    //
    //   //parse, and broadcast on SystemAction channel
    //
    //
    //   //this FILE DETERMINES WHAT ACTIONS ARE RAN
    //
    //   //default structure:
    //
    //   //{
    //   //captureUnit: null
    //   //Attack: null
    //   //}
    //
    //   //example of capture command:
    //
    //   //{
    //   //captureUnit: "capture:A:32323434rffr"
    //   //Attack: "dsds"
    //   //}
    //
    //
    // });







  setInterval(function(){
      validateServices()
      startMainGameLoop()

      //test
      countFromDB(function(data){
        //console.log("Counting from Db")
        //console.log(data)
      })

      fs.readFile(ranFromDestination+"SystemAction/information", (err, data) => {
        if (err) {
          //throw err
          console.log(err);
        };
        Broadcast( client, "SystemAction", JSON.stringify(data) )
        //after broadcast, go back to idle
        resyncSystemActionFile()
        //parse, and broadcast on SystemAction channel
        //this FILE DETERMINES WHAT ACTIONS ARE RAN
        //default structure:
        //{
        //captureUnit: null
        //Attack: null
        //}
        //example of capture command:
        //{
        //captureUnit: "capture:A:32323434rffr"
        //Attack: "dsds"
        //}
      });

      process.stdout.clearLine();  // clear current text
      process.stdout.cursorTo(0);  // move cursor to beginning of line
      i = (i + 1) % 4;
      //var dots = new Array(i + 1).join(".");
      var graphic = getGameStatus(function(graphic){
        //console.log("GRAPHIC")
        //console.log(graphic)
        //console.log(typeof graphic)
        process.stdout.write(graphic);  // write text
      })
  },mainGameLoopSpeed)
}//beginGame

function validateServices(){
      if((epochTime) % mainCheckpointSpeed == 0){
        getFromDB(function(data){
          data = JSON.parse(data)
                    var playerState
                    if (data == null || data == undefined){
                      try{
                        throw err; // we'll not consider error handling for now
                      }catch(err){
                        console.log(err)
                        data = dummyPlayerData
                        playerState = dummyPlayerData
                      }
                    }else{
                      playerState = data
                    }

                    if(data != null){
                      playerState = data
                    }else{
                      playerState = dummyPlayerData
                    }

                    var d = Date()
                    var player = {
                      timestamp: d,
                      ip: "[IP]"+myip+"[/IP]",
                      playerName: playerName,
                    }

                    var units = []
                    var start = 0
                    /*
                    TODO
                    Convert this hardcoded make request async calls to using promises
                    */
                    var payload = makeRequest(playerState, data, units, start, function(first){
                        makeRequest(playerState, data, first, ++start, function(second){
                          makeRequest(playerState, data, second, ++start, function(third){
                            //console.log(third)
                            player.units = third
                            Broadcast( client, playerName, JSON.stringify(player) )
                          })
                        })
                      //Broadcast( client, playerName, JSON.stringify(player) )
                      //}
                    })
        });////##### end getFromDB
  }
}

function makeRequest(playerState, data, units, index, cb){
    var availPorts = []
    for(var aP = 2; aP < process.argv.length; aP++){
      availPorts.push(process.argv[aP])
    }
    var it = index
    var u = index
    //////information on given service to test, this would be iterative
    var rand = Math.floor( Math.random()*availPorts.length)

    ////////////this indicates a success in connecting to the service
    //validate services

    var req = http.request({
      host: 'localhost',
      port:  availPorts[it],
      path: '',
      headers: {
       'Content-Type': 'text/html',
     },
      method: 'GET'
    }, function(res) {

      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        if("units" in playerState){
          if(playerData.units != undefined){
              units.push({
                code: res.statusCode,
                id: playerData.units[it].id,
                health: playerData.units[it].health,
                port: availPorts[it]
              })
          }else{
          
          }
        }else{
          units.push({
            code: res.statusCode,
            id: fetchFingerprint(playerState.playerName,playerState.ip,u),
            health: 102,
            port: availPorts[it]
            })
        }
        var d = Date()
        var player = {
          timestamp: d,
          ip: "[IP]"+myip+"[/IP]",
          playerName: playerName,
          units: units
        }
        //console.log(player)
        playerData = player

        if("units" in data){
          playerData = data
        }
        cb(units)
      });
    });
    req.on('error', function(e) {
      console.log('Service Up: ' + e.code +" "+e.message);
      console.log('HEADERS: ' + JSON.stringify(e));
      try{
        if("units" in playerState){
                units.push({
                    code: 404,
                    id: playerData.units[it].id,
                    health: playerData.units[it].health,
                    port: availPorts[it]
                  })
        }else{
          units.push({
              code: 404,
              id: fetchFingerprint(playerState.playerName,playerState.ip,u),
              health: 0,
              port: availPorts[it]
            })
        }
      }catch(err){
        console.log(err)
      }
      var d = Date()
      var player = {
        timestamp: d,
        ip: "[IP]"+myip+"[/IP]",
        playerName: playerName,
        units: units,
      }
      playerData = player
      if("units" in data){
        playerData = data
      }
      cb(units)
    });
    // write data to request body
    req.write('data\n');
    req.end();
}

function startMainGameLoop(){
  if(playerData == null || playerData == undefined){
    playerData = dummyPlayerData
    if((epochTime) % mainCheckpointSpeed == 0){
      putIntoDB(playerData)
    }
  }else{
      getFromDB(function(data){
        data = JSON.parse(data)
        var f = fs
        var pd = data
        if (pd == null || pd == undefined){
          pd = dummyPlayerData
        }else{

        }
        epochTime++
        const thread = spawn(function(input, done) {
            var obj = input.pd
            var test = { data : obj }
            done(test);
        });
        thread
        .send({ fs : f , pd : pd })
        .on('message', function(response) {
          var responseData = response.data
          var fs = require('fs');
          var stringJSON = responseData
          var stest = null
          if(stringJSON === null){
            //
          }else{
            if((epochTime) % mainCheckpointSpeed == 0){
              //putIntoDB(stringJSON)
            }
          }
          thread.kill();
        })
        .on('error', function(error) {
          //console.error('Worker errored:', error);
        })
        .on('exit', function() {
          //console.log('Worker has been terminated.');
        });
      })
  }
}

function getGameStatus(cb){
    getFromDB(function(data){
            var playerDataLocal = JSON.parse(data)
      if(playerDataLocal == null){
          var full = "| XXX |";
        }else{
          var hlth
          var s = ""
          var name =  playerDataLocal.playerName
          if("units" in playerDataLocal){
            for(var i = 0; i < playerDataLocal.units.length; i++){
              tmphlth = playerDataLocal.units[i].health
              s+=tmphlth+" | "
            }
            hlth = s
          }else{
            hlth = "N/A"
          }
          var full = "| "+name+": "+hlth.toString();
        }
        cb(full)
    })
}

client.on('published', function(topic, client) {
  console.log("Published: "+Date())
});

client.on('subscribed', function(topic, client) {
  console.log("subscribed to "+topic)
});

client.on('message', function(topic, message) {
        var payload = ab2str(message);
        var pl = JSON.stringify( payload )
        var ipBeginning = "[IP]"
        var ipLast = "[/IP]"
        var ip = getJSONBackup(pl, ipBeginning, ipLast)
        var ipAddressSetAlready = true;
        var isOwnHealthChannel = (topic == playerName+"HEALTH") ? true : false
        var isOwnChannel = (topic == playerName) ? true : false
        if(ipAddressSetAlready){
          //check to see if it changed
        }
        if(isOwnHealthChannel){
            writeOwnIP(ip)
            if(payload == ""){

            }else{
              //###console.log( "====START IS OWN HEALTH CHANNEL=== "+topic )
              //###console.log(payload)
              //###console.log( "====END IS OWN HEALTH CHANNEL=== "+topic )
              var isPayloadReal = (JSON.stringify(payload).indexOf("{") > -1);
              var isBlankCurlyBrace = (JSON.stringify(payload) == "{}")
                          if(isPayloadReal && !isBlankCurlyBrace){
                              var jsonPayload = JSON.parse(payload)
                                      try{
                                        if( ("units" in jsonPayload) && playerData != null){
                                          if(jsonPayload.units.length > 0){
                                                if(jsonPayload.units[0].health < 101){
                                                    if("units" in playerData){
                                                      playerData = JSON.parse(payload)
                                                      putIntoDB(JSON.parse(payload))
                                                    }
                                                }
                                            }
                                        }
                                      }catch(err){
                                        console.log(err)
                                      }
                          }
              if(payload.units != null){
                //console.log(payload.units[0].health +" "+payload.timestamp)
              }
            }
          }
  if(isOwnChannel){
    writeOwnIP(ip)
  }
  if(!isOwnChannel && !isOwnHealthChannel){
    writeOppIP(ip)
  }
});

function writeOwnIP(ip){
  fs.writeFile(ranFromDestination+"/node/playerserver/mine.ip", ip, function(err) {
      // if(err) {
      //     return console.log(err);
      // }
      //
      // console.log("The file was saved!");

  });
}

function writeOppIP(ip){
  fs.writeFile(ranFromDestination+"/node/playerserver/opp.ip", ip, function(err) {
      // if(err) {
      //     return console.log(err);
      // }
      //
      // console.log("The file was saved!");
  });
}

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function getJSONBackup(json, b, e){
  var start = (json.indexOf(b)+(b.length))
  var end = (json.lastIndexOf(e))
  var result = json.substring(start,end);
  return result
}

function Broadcast(c, pn, ps){
  c.publish( pn, ps );
}


function getCallStackSize() {
    var count = 0, fn = arguments.callee;
    while ( (fn = fn.caller) ) {
        count++;
    }
    return count;
}


function putIntoDB(d){
  dbs.serialize(function() {
            //dbs.run("CREATE TABLE playerData (data TEXT)");
            var stmt = dbs.prepare("INSERT INTO playerData VALUES (?,?)");
            var sToPlace = JSON.stringify(d)
            //for (var i = 0; i < 10; i++) {
                stmt.run(++playerRecordCount,sToPlace);
            //}
            stmt.finalize();
            // dbs.each("SELECT rowid AS id, data FROM playerData", function(err, row) {
            //     console.log(row.data);
            // });
          });
  //bs.close();

}

function getFromDB(cb){
  try{
    dbs.serialize(function() {
          dbs.each("SELECT id AS id, data FROM playerData ORDER BY id DESC LIMIT 1", function(err, row) {
              if(err){
                try{
                  throw err;
                }catch(err){
                  console.log(err)
                  data = '{"playerID": "dshunjkd89", "state": "aliveSS", "attackType": "portscan"}'
                }
              }else{
                if(row != undefined){
                  cb(row.data)
                }else{
                  cb(row.data)
                }
              }
          });
      });
    //bs.close();
  }catch(err){
    console.log(err)
  }
}

function countFromDB(cb){
  try{
    dbs.serialize(function() {
          dbs.each("SELECT COUNT(id) AS amount FROM playerData;", function(err, row) {
              if(err){
                try{
                  throw err;
                }catch(err){
                  console.log(err)
                }
              }else{
                if(row != undefined){
                  cb(row)
                }else{
                  cb(row)
                }
              }
          });
      });
    //bs.close();
  }catch(err){
    console.log(err)
  }
}

function fetchFingerprint(playerName,ip,u){
  var returned = generateString(playerName,ip,u)
  return returned;
}

function generateString(playerName,ip,u){
  return randomstring.generate();
}
function resyncSystemActionFile(){
  fs.writeFile(ranFromDestination+"SystemAction/information", '{\"playerName\": \"'+playerName+'\", \"opponentName\": \"'+channel+'\", \"state\": \"idle\"}', function(err) {

  });
}
//client.end();
