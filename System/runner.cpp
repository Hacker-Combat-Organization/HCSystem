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
#include <iostream>
#include <sstream>
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include<fstream>
using namespace std;
int main(int argc,char *argv[]){
  printf ("C++ Runner is initiating...");
  if (system(NULL)) puts ("Ok");
    else exit (EXIT_FAILURE);
  /*
  setups the game by creating a penetrator object, and writing an initial JSON file that looks like:
  data = {
          "playerID" : self.playerID,
          "state" : "aliveSS",
          "attackType" : self.type
       }
  once writtin, call init environment(), which deletes all existing docker containers
  and then creats all relevent docker containers:
  "docker run -i -d --dns=68.105.28.12 -p 3001:3001 image_name"
  the above container is a proof of concept that creates a web application sitting on 3001
  TODO:
  Set up data store container for game states to be stored as MQTT receives, and
  analyzed at will without blocking MQTT execution on send/receive side.
  */
  
  string ports(argv[1]);
  string player(argv[2]);
  string opponent(argv[3]);
  string gameip(argv[4]);
  std::string commandPython = "make start "+ports;
  system (commandPython.c_str());
  // ------ split ports
  string arr[4];
  string hostPorts[3];
  string hostPortsStr;
  int i = 0;
  stringstream ssin(ports);
  while (ssin.good() && i < 4){
      ssin >> arr[i];
      ++i;
  }
  //// All host ports are in seperare files, and must concatenate into memory
  for(i = 0; i < 3; i++){
      cout << "Guest " << arr[i] << endl;
      ifstream myReadFile;
      myReadFile.open(("SystemAction/port_"+arr[i]).c_str());
      char output[100];
      if (myReadFile.is_open()) {
        while (!myReadFile.eof()) {
          myReadFile >> output;
        }
        cout << "Guest " << arr[i] << " Host "<< output << endl;
        hostPorts[i] = output;
        hostPortsStr += hostPorts[i]+" ";
      }
      myReadFile.close();
  }
  cout << "proof " << hostPortsStr.c_str() << endl;
  //system ("make status");
  // system ("make launch");
  //system ("node ./node/gameserver/GameServer.js &");
  //cout << ports << endl;
  std::string commandJS = "node ./node/playerserver/PlayerServer.js "+hostPortsStr+" "+player+" "+opponent+" "+gameip;
  system (commandJS.c_str());
  return 0;
}
