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

$(function () {
    "use strict";
    // for better performance - to avoid searching in DOM
    var content = $('#content');
    var input = $('#input');
    var status = $('#status');
    // my color assigned by the server
    var myColor = false;
    // my name sent to the server
    var myName = false;
    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    // if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        content.html($('<p>', { text: 'Sorry, but your browser doesn\'t '
                                    + 'support WebSockets.'} ));
        input.hide();
        $('span').hide();
        return;
    }
    var connection = new WebSocket('ws://127.0.0.1:1337');
    connection.onopen = function () {
        // first we want users to enter their names
        input.removeAttr('disabled');
        status.text('Choose Admin:');
    };
    connection.onerror = function (error) {
        // just in there were some problems with conenction...
        content.html($('<p>', { text: 'Sorry, but there\'s some problem with your '
                                    + 'connection or the server is down.' } ));
    };
    // most important part - incoming messages
    var playerAnalyticsHashTable = {}
    var firstPlayerRecognized = "";
    connection.onmessage = function (message) {
        // try to parse JSON message. Because we know that the server always returns
        // JSON this should work without any problem but we should make sure that
        // the massage is not chunked or otherwise damaged.
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }
        // NOTE: if you're not sure about the JSON structure
        // check the server source code above
        if (json.type === 'color') { // first response from the server with user's color
            myColor = json.data;
            status.text(myName + ': ').css('color', myColor);
            input.removeAttr('disabled').focus();
            // from now user can start sending messages
        } else if (json.type === 'history') { // entire message history
            // insert every single message to the chat window
            for (var i=0; i < json.data.length; i++) {
                addMessage(json.data[i].author, json.data[i].text,
                           json.data[i].color, new Date(json.data[i].time));
            }
        } else if (json.type === 'message') { // it's a single message
            input.removeAttr('disabled'); // let the user write another message
            addMessage(json.data.author, json.data.text,
                       json.data.color, new Date(json.data.time));
        } else {
            console.log('Hmm..., I\'ve never seen JSON like this: ', json);
            var players = json.key
            console.log(players)
            var unitIndex = 0
            var playerIter = 0
            console.log("amount of players: "+barChartData.datasets.length)
            console.log("datasets")
            console.log(barChartData.datasets)
            console.log("p1_name: "+ $("#p1_name").val() )
            playerAnalyticsHashTable[ players[0].playerName ] = json
            var playerOneName = $("#p1_name").val()
            var playerTwoName = $("#p2_name").val()
            try{
              var analytics = json.analytics
              console.log("====ANALYTICS for one ====")
              console.log(json)
              console.log(analytics)
              //update both player analytics
              if(analytics.playerName == playerOneName){
                window.myChart.data.datasets[0].data["0"] = analytics.x
                window.myChart.data.datasets[0].data["1"] = analytics.y
                window.myChart.data.datasets[0].data["2"] = analytics.z
              }
              if(analytics.playerName == playerTwoName){
                window.myChart2.data.datasets[0].data["0"] = analytics.x
                window.myChart2.data.datasets[0].data["1"] = analytics.y
                window.myChart2.data.datasets[0].data["2"] = analytics.z
              }
              console.log("Player 1 label: "+playerOneName)
              console.log("Player 2 label: "+playerTwoName)
              try{
                if(players[0].playerName == playerOneName){
                  //PLAYER ONE UPDATES
                  barChartData.datasets[0].data[0] = (players[0]["units"][0]["health"] < 0) ? 0 : players[0]["units"][0]["health"];
                  barChartData.datasets[1].data[0] = (players[0]["units"][1]["health"] < 0) ? 0 : players[0]["units"][1]["health"];
                  barChartData.datasets[2].data[0] = (players[0]["units"][2]["health"] < 0) ? 0 : players[0]["units"][2]["health"];
                  barChartData.labels[0] = players[0].playerName
                  //if the second i in players is player one, load player one into first viz
                }else if(players[1].playerName == playerOneName){
                  barChartData.datasets[0].data[0] = (players[1]["units"][0]["health"] < 0) ? 0 : players[1]["units"][0]["health"];
                  barChartData.datasets[1].data[0] = (players[1]["units"][1]["health"] < 0) ? 0 : players[1]["units"][1]["health"];
                  barChartData.datasets[2].data[0] = (players[1]["units"][2]["health"] < 0) ? 0 : players[1]["units"][2]["health"];
                  barChartData.labels[0] = players[1].playerName
                }
                if(players[0].playerName == playerTwoName){
                  barChartData.datasets[0].data[1] = (players[0]["units"][0]["health"] < 0) ? 0 : players[0]["units"][0]["health"];
                  barChartData.datasets[1].data[1] = (players[0]["units"][1]["health"] < 0) ? 0 : players[0]["units"][1]["health"];
                  barChartData.datasets[2].data[1] = (players[0]["units"][2]["health"] < 0) ? 0 : players[0]["units"][2]["health"];
                  barChartData.labels[1] = players[0].playerName
                }else if(players[1].playerName == playerTwoName){
                  barChartData.datasets[0].data[1] = (players[1]["units"][0]["health"] < 0) ? 0 : players[1]["units"][0]["health"];
                  barChartData.datasets[1].data[1] = (players[1]["units"][1]["health"] < 0) ? 0 : players[1]["units"][1]["health"];
                  barChartData.datasets[2].data[1] = (players[1]["units"][2]["health"] < 0) ? 0 : players[1]["units"][2]["health"];
                  barChartData.labels[1] = players[1].playerName
                }
              }catch(e){

              }
            }catch(e){
              console.log(e)
            }
            
            //with two player keys
            // for(var x = 0 ; x < barChartData.datasets.length; x++){
            //   console.log(barChartData.datasets[x])
            //   //console.log(players[x].units)
            //   //console.log(players[0].units)
            //   for(var b = 0 ; b < barChartData.datasets[x].data.length; b++){
            //     console.log(barChartData.datasets[x].units[b])
            //     // barChartData.datasets[x].units
            //     // barChartData.datasets[x].data[b]
            //   }
            // }
            window.myBar.update();
        }
    };

    /**
     * Send mesage when user presses Enter key
     */
    input.keydown(function(e) {
        if (e.keyCode === 13) {
            var msg = $(this).val();
            if (!msg) {
                return;
            }
            // send the message as an ordinary text
            connection.send(msg);
            $(this).val('');
            // disable the input field to make the user wait until server
            // sends back response
            input.attr('disabled', 'disabled');
            // we know that the first message sent from a user their name
            if (myName === false) {
                myName = msg;
            }
        }
    });

    /**
     * This method is optional. If the server wasn't able to respond to the
     * in 3 seconds then show some error message to notify the user that
     * something is wrong.
     */
    setInterval(function() {
        if (connection.readyState !== 1) {
            status.text('Error');
            input.attr('disabled', 'disabled').val('Unable to comminucate '
                                                 + 'with the WebSocket server.');
        }
    }, 3000);

    /**
     * Add message to the msg window
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});
