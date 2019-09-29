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
//"use strict";
var mosca = require('mosca')
var colors = require('colors');
var path = require('path');
var express = require('express');
var app = express();
// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'HC-Game-Server';
// Port where we'll run the websocket server
var webSocketsServerPort = 1337;
var WebSocketServer = require('websocket').server;
var http = require('http');
var connection
var ips = new Map()
var players = new Map()
var flags = new Map()
var flagsMap = new Map()
var capturedFlags = new Map()
var settings = {
      port: 1883
    },
    startingHealth = 100,
    damage = 1
var epoch = 0
var Analytics  = {
  init: function(obj){
    console.log(obj)
    console.log(Analytics.enterPerMin(obj.x))
    console.log(Analytics.deletePerMin(obj.y))
  },
  enterPerMin: function(entersPressed){
    return entersPressed*6;
  },
  deletePerMin: function(deletesPressed){
    return deletesPressed*6;
  }
}
var latestAnalytics = {}
setInterval(function(){
  console.log(ips.size)
  console.log(players.size);
  console.log(flags.size);
  console.log(flagsMap.size);
  console.log(capturedFlags.size)
}, 1000)
//here we start mosca
var serverM = new mosca.Server(settings, function() {
  console.log('Game Server is up and running')
});
serverM.published = function(packet, client, cb = (function(vo){
  console.log("JIONJWIDJOIENDEDNEIJ: "+vo)
})) {
  cb("jossksksk")
  epoch++
  //console.log('Game Server Received Message: ');
  //payload
  var pl = ab2str(packet.payload)
  //console.log(pl);
  var actualMessage = false;
  (pl == "") ? actualMessage = false : actualMessage = true
  //console.log("is actual message: "+actualMessage)
  //bmessage is broadcasted message
  if(actualMessage){
    var d = Date()
    //var bmessage = JSON.parse(pl)
    var obj = JSON.parse(pl)
    obj.timestamp = d
    var units = obj.units
    var plName = obj.playerName
    var ipadd = obj.ip
    /*
    TODO flag registering to enable imediate capture
        if packet.topic == RegisterFlags
              add to flags object, for player, in flagHashTable
    */
    if (packet.topic == "RegisterFlags") {
      console.log("REGISTER FLAGS CHANNEL")
      var flagobj = obj
      console.log(flagobj)
      console.log(typeof flagobj)
      var flagRegisterData = flagobj
      registerFlags(flagRegisterData)

    }
    /*
    TODO system action calls over mqtt
        if packet.topic == SystemAction

              when a system action packet is published, read that system aciton
              and act accoridgnly

              if capture unit, get hashtables for player flags, and opponent flags:

              1) grab flag for (A,b,or c) unit for player and opponent
              2) iterate through opponents units and check if flag is right

              SystemAction will check for:
                    {
                    captureUnit: "capture:A:32323434rffr"
                    Attack: "dsds"
                    }
    */
    if (packet.topic == "SystemAction") {
      console.log("SYSTEM ACTION CHANNEL")
      try{
        var sysact = JSON.parse(ab2str(obj.data))
        performSystemAction(sysact)
      }catch(e){
        //console.log(e);
      }
    }
    if (packet.topic == "Analytic") {
      console.log("ANALYTIC CHANNEL")
      try{
        console.log(obj)
        latestAnalytics = obj
        console.log("playerName: "+obj["playerName"])

        /*
        { playerName: 'player 1',
        opponentName: 'player 2',
        state: 'analytics',
        parameter: '{x: 0, y: 0}',
        timestamp: 'Sun Dec 18 2016 18:59:00 GMT-0700 (MST)' }
        */
        //console.log(ab2str(obj.data))
        //var sysact = JSON.parse(ab2str(obj.data))
        ///performSystemAction(sysact)
      }catch(e){
        console.log(e);
      }
    }
    if ('units' in obj){
            if(obj.units[0] == "" || obj.units[0] == undefined){
              //
            }
            for(var u = 0; u < units.length; u++){
              var combo = plName+ipadd+units[u].id
              var currentHealth = ( ips.has(combo) ) ? ips.get(combo).health : startingHealth
              var code = units[u].code
              var seconds = 1
              units[u].health = calculateHealth( currentHealth, seconds, damage, code)
              console.log(packet.topic+" health is "+units[u].health+" with code "+code)
              //console.log("IP SIZE: "+ips.size())
              /*
              TODO
              check if container is captured, by looking at something, maybe captured hashtable?
              if units[u] is captured
                units[u].health = 0
              */
              try{
                if (   capturedFlags.has( players.get( packet.topic ).units[ u ].id )    ){
                  units[u].health = 0;
                }
              }catch(err){
                console.log("CAUGHT ERROR: "+err)
              }
              ips.set(combo, units[u]);
              units[u] = ips.get(combo)
            }
            //console.log("PLAYER KEYS: "+players.keys())
            //console.log("IP KEYS: "+ips.keys())
            obj.units = units
            console.log("SHOWING OBJECT")
            console.log(obj)
            players.set(packet.topic, obj)
            /*
            TODO:
            here is where we show the entire obj coming in, reference
            unit id, with flag
            */
            //broadcast data back to player-selves
            console.log("Epoch: "+epoch)
            console.log("Epoch % 10: "+(epoch % 10))
            //if(epoch % 10 == 0){
            if((epoch % 10) < 7){
               Message(serverM, JSON.stringify(players.get(packet.topic)), packet.topic+"HEALTH");
            }
            //connection.sendUTF(JSON.stringify( players.get(packet.topic) ));
    }else{
            console.log("no units in obj")
            //Message(server, obj, obj.playerName+"HEALTH");
    }
  }
}
// fired whena  client is connected
serverM.on('clientConnected', function(client) {
  console.log('client connected', client.id);
});
// fired when a message is received
serverM.on('published', function(packet, client) {
    var pl = ab2str(packet.payload)
      var isSYS= (JSON.stringify(packet.topic).indexOf("$SYS") > -1);
      var isH = (JSON.stringify(packet.topic).indexOf("HEALTH") > -1);
      if(!isSYS && !isH){
          // console.log("==== 282 "+packet.topic+"====")
          // console.log(players.get(packet.topic))
          // console.log("==== end ====")
          // Message(server, JSON.stringify(players.get(packet.topic)), packet.topic+"HEALTH");
      }
});
// fired when a client subscribes to a topic
serverM.on('subscribed', function(topic, client) {
  	console.log("---SUBSCRIBE---");
    //console.log(client.connection)
	  //Message(server, "successfully subscribed to "+topic, topic);
	  console.log('subscribed : ', topic);
});
// fired when a client subscribes to a topic
serverM.on('unsubscribed', function(topic, client) {
  console.log('unsubscribed : ', topic);
});
// fired when a client is disconnecting
serverM.on('clientDisconnecting', function(client) {
  console.log('clientDisconnecting : ', client.id);
});
// fired when a client is disconnected
serverM.on('clientDisconnected', function(client) {
  console.log('clientDisconnected : ', client.id);
});
function Message(server, msg, topic){
	        var message = {
          topic: topic,
          payload: msg, // or a Buffer
          qos: 0, // 0, 1, or 2
          retain: false // or true
          };
          try{
            server.publish(message, function() {
              //console.log('done!');
	         });
          }catch(err){
            console.log(err)
          }
}
function addZero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}
function getTime() {
    var d = new Date();
    var h = addZero(d.getHours(), 2);
    var m = addZero(d.getMinutes(), 2);
    var s = addZero(d.getSeconds(), 2);
    var ms = addZero(d.getMilliseconds(), 3);
    returnVal = h + ":" + m + ":" + s + ":" + ms;
    return returnVal;
}
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}
function decreaseHealth(currentHealth, amountOfChecks){
  return currentHealth - (amountOfChecks * damage)
}
function getJSONBackup(json, b, e){
  var start = (json.indexOf(b)+(b.length))
  var end = (json.lastIndexOf(e))
  var result = json.substring(start,end);
  return result
}
function calculateHealth(ch, sec, x, c){
  //console.log("Current Health: "+ch+" Seconds: "+sec+" Damage: "+x+" Code: "+c)
  return (c == 200) ? ch : (ch - (sec * x))
}
function performSystemAction(sysact){
  console.log(sysact)
  if(sysact.state == "CaptureUnit"){
    console.log("CAPTURING UNIT FOR "+sysact.playerName)
    if( flags.has(sysact.opponentName) ){
      console.log("System Action: flags has flags for "+sysact.playerName)
      console.log(flags.get(sysact.playerName))
      console.log("System Action: flags has flags for opponent of "+sysact.opponentName)
      console.log(flags.get(sysact.opponentName))
      //var opponentName = players.get(sysact.playerName).opponent;
      console.log(sysact.playerName+"'s player hashtable")
      console.log(players.get(sysact.playerName))
      var submittedFlag = sysact.parameter;
      var flagCollection = flags.get(sysact.opponentName).flags;
      var flagIsInOpponentsCollection = (flagCollection.indexOf(submittedFlag) > -1);
      console.log("flag "+submittedFlag+" is present for opponent"+sysact.opponentName+": "+flagIsInOpponentsCollection)
      /* TODO TEST  */
      //flagIsInOpponentsCollection = true
      /* map for arbitrary container names, one, two , three */
      var tmpMap = {"one": 0,"two": 1, "three": 2}
      if(flagIsInOpponentsCollection){
        var flagIsNotAlreadyCaptured = capturedFlags.has(submittedFlag)
        if(!flagIsNotAlreadyCaptured){
          var unitImageName = submittedFlag.split("__")[0]
          console.log(unitImageName)
          console.log( tmpMap[""+unitImageName] )
          //capturedFlags.put(players.get(sysact.opponentName).units[tmpMap["unitImageName"]].id, sysact);
          /* using the units id name and tmp map to get the index of the corrct unit belonging to the fan  */
          try{
            if( players.get( sysact.opponentName ).units[ tmpMap[""+unitImageName] ] != undefined ){
              capturedFlags.set( players.get( sysact.opponentName ).units[ tmpMap[""+unitImageName] ].id , sysact );
            }
          }catch(err){
            console.log(err)
          }
        }
      }
      console.log("=========CAPTURED FLAGS===========")
      console.log(capturedFlags.keys())
      console.log("=========END CAPTURED FLAGS===========")
    }else{
      console.log("System Action: flags DOESNT have flags for "+sysact.playerName)
      //dont need to be able to PUT flags into hashtable during system action
      console.log(flags.get(sysact.playerName))
    }
  }else if(sysact.state == "idle"){
    console.log("remaining IDle for "+sysact.playerName)
  }else if(sysact.state == "analytic"){
    console.log("ANALYTICS for "+sysact.playerName)
  }
}
function registerFlags(flagsData){
  if( flags.has(flagsData.playerName) ){
    console.log("REGISTER: flags has flags for "+flagsData.playerName)
    console.log(flags.get(flagsData.playerName))
  }else{
    console.log("REGISTER: flags DOESNT have flags for"+flagsData.playerName)
    console.log("Mapping Flags")
    mapFlagsRegistered(flagsData)
    flags.set(flagsData.playerName, flagsData)
    console.log(flags.keys())
    console.log(flagsMap.keys())
    console.log("flagsmap for "+flagsData.playerName)
    console.log(flags.get(flagsData.playerName))
  }
}
function mapFlagsRegistered(flagsData){
  var player = players.get(flagsData.playerName)
  console.log(players.keys())
  if(player != undefined){
    if("units" in player){
      for(var i = 0; i < player.units.length; i++){
        if(!flagsMap.has( player.units[i].id )){
          flagsMap.set(player.units[i].id, flagsData.flags[i])
          console.log("just MAPPED ALL FLAGS")
          console.log(flagsMap.keys())
        }
      }
    }
  }
}
app.use(express.static(__dirname, { index: 'index.html' }));
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("HC Game Server app listening at http://%s:%s", host, port)
})
// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'HC-Game-Server';
// Port where we'll run the websocket server
var webSocketsServerPort = 1337;
// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');
/**
 * Global variables
 */
// latest 100 messages
var history = [ ];
// list of currently connected clients (users)
var clients = [ ];
/**
 * Helper function for escaping input strings
 */
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
// Array with some colors
var colors = [ 'red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange' ];
colors.sort(function(a,b) { return Math.random() > 0.5; } );
var server = http.createServer(function(request, response) {
    // Not important for us. We're writing WebSocket server, not HTTP server
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});
var wsServer = new webSocketServer({
    // WebSocket server is tied to a HTTP server. WebSocket request is just
    // an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
    httpServer: server
});
// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
    // accept connection - you should check 'request.origin' to make sure that
    // client is connecting from your website
    // (http://en.wikipedia.org/wiki/Same_origin_policy)
    var connection = request.accept(null, request.origin);
    // we need to know client index to remove them on 'close' event
    var index = clients.push(connection) - 1;
    var userName = false;
    var userColor = false;
    console.log((new Date()) + ' Connection accepted.');
    setInterval((function(){
      console.log("=====")
      // players.forEach((function(key,item){
      //   //console.log(key + item)
      //   connection.sendUTF(JSON.stringify( {key: item} ));
      // }))
      console.log(players.keys())
      var playerKeys = players.keys()
      var dataSetHolder = []
      for(var pk = 0; pk < playerKeys.length; pk++){
        dataSetHolder.push(players.get(playerKeys[pk]))
      }
      //Analytics.init(obj.parameter);
      //console.log(obj)
      try{
        console.log("Object and Analytics")
        console.log(obj)
        console.log(latestAnalytics)
         var analyticsData = {
            "playerName": latestAnalytics.playerName,
            "x": Analytics.enterPerMin(latestAnalytics.parameter.x),
            "y": Analytics.deletePerMin(latestAnalytics.parameter.y),
            "z": Analytics.deletePerMin(latestAnalytics.parameter.z)
         }
      }catch(e){
        console.log("ERROR: "+e)
        obj = {}
        analyticsData = {}
      }
      connection.sendUTF(JSON.stringify( {key: dataSetHolder, analytics: analyticsData} ));
    }),1000)
    // send back chat history
    if (history.length > 0) {
        connection.sendUTF(JSON.stringify( { type: 'history', data: history} ));
    }
    // user sent some message
    connection.on('message', function(message) {
        if (message.type === 'utf8') { // accept only text
            if (userName === false) { // first message sent by user is their name
                // remember user name
                userName = htmlEntities(message.utf8Data);
                // get random color and send it back to the user
                userColor = colors.shift();
                connection.sendUTF(JSON.stringify({ type:'color', data: userColor }));
                console.log((new Date()) + ' User is known as: ' + userName
                            + ' with ' + userColor + ' color.');
            } else { // log and broadcast the message
                console.log((new Date()) + ' Received Message from '
                            + userName + ': ' + message.utf8Data);
                // we want to keep history of all sent messages
                var obj = {
                    time: (new Date()).getTime(),
                    text: htmlEntities(message.utf8Data),
                    author: userName,
                    color: userColor
                };
                history.push(obj);
                history = history.slice(-100);
                // broadcast message to all connected clients
                var json = JSON.stringify({ type:'message', data: obj });
                for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF(json);
                }
            }
        }
    });
    // user disconnected
    connection.on('close', function(connection) {
        if (userName !== false && userColor !== false) {
            console.log((new Date()) + " Peer "
                + connection.remoteAddress + " disconnected.");
            // remove user from the list of connected clients
            clients.splice(index, 1);
            // push back user's color to be reused by another user
            colors.push(userColor);
        }
    });
});
