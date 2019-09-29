'''
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
'''
# Penetrator class is synonomous with player
import sys
import os
import string
import random
import uuid
from subprocess import call
from Logger import Logger as Logger
from Attack import Attack as Attack
from JSONer import JSONer as JSONer
from Runner import Runner as Runner
from SystemAction import SystemAction as SystemAction
class Penetrator:
   'Common base class for all employees'
   pensCount = 0
   attack = Attack()
   playerID = None
   ports = None
   mode = None
   units = None
   def __init__(self, playerID, ports, mode, units):
      #increase amount of totalplayers
      Penetrator.pensCount += 1
      #set player ID
      self.playerID = playerID
      self.ports = ports
      #set player attack type
      self.type = self.setAttackType("portscan")
      self.mode = mode
      self.units = units
   def setup(self):
       #write player config
       data = {
          "playerID" : self.playerID,
          "state" : "aliveSS",
          "attackType" : self.type
       }
       JSONer.write("data.json", data)
       self.initEnvironment()
   def initEnvironment(self):
       Logger.log("Resetting Environment...", "warning")
       self.resetEnvironment()
       Logger.log("Initing Environment...", "warning")
       ##### COULD PASS THE FLAG INTO THE CONTAINER AS A PARAM
       splitPorts = self.ports.split()
       imageNames = ["one", "two", "three"]
       sshPorts = ["2222","2223","2224"]
       flags = []
       print splitPorts
       #create docker containers for game peices
       if (self.mode == "docker"):
           #Runner.Run(["bash","./buildContainers.sh", str( " ".join(splitPorts) )] )
           print("------going into buildCons "+str( self.ports )+" "+str( self.units ))
           os.system("bash ./buildContainers.sh "+str( self.ports )+" "+str( self.units ) )
           for idx,port in enumerate(splitPorts):
               os.system("touch ./SystemAction/ports")
               Runner.Run(["docker", "run", "-d", "--cidfile=./units/"+imageNames[idx]+".id", "-p", port+":"+port, "hc/"+imageNames[idx]])
               os.system("echo "+str(port)+" > ./SystemAction/port_"+str(port))
               # there is an issue with running a copy command upon running container
               # will look into other solutions
       elif (self.mode == "vagrant"):
          Runner.Run(["pwd"])
          #Runner.Run(["bash","./buildVMs.sh"])
          os.system("bash ./buildVMs.sh "+str( self.ports )+" "+str( self.units ) )
          for idx,port in enumerate(splitPorts):
              Logger.log("Vagrant: per port - "+port,"okblue")

              os.system("touch ./SystemAction/ports")
              getHostPortFromVagrant = "vagrant port $(vagrant global-status | grep virtualbox | awk '{print $1}' | sed -n "+str(idx+1)+"p) | tail -n1 | awk '{print $4}'"
              Logger.log(getHostPortFromVagrant,"okblue")
              os.system(str(getHostPortFromVagrant)+" > ./SystemAction/port_"+str(port))
              # there is an issue with running a copy command upon running container
              # will look into other solutions
              #
              #
       SystemAction.ActionsForSetup(imageNames,self.mode,splitPorts)
       #os.system("echo 'initing env'")
   def resetEnvironment(self):
       #Runner.Run(["docker", "rm", "-f", "$(docker ps -a)"])
       splitPorts = self.ports.split()
       os.system("docker rm -f $(docker ps -a)")
       os.system("docker ps -a | while read x; do docker rm -f $(echo $x | awk '{print $1}' ); done")
       os.system("vboxmanage controlvm unit_1 poweroff soft; vboxmanage unregistervm unit_1 --delete")
       os.system("vboxmanage controlvm unit_2 poweroff soft; vboxmanage unregistervm unit_2 --delete")
       os.system("vboxmanage controlvm unit_3 poweroff soft; vboxmanage unregistervm unit_3 --delete")
       if (self.mode == "docker"):
           Logger.log("Docker: reset environment","okblue")
       elif (self.mode == "vagrant"):
           Logger.log("Vagrant: reset environment","okblue")
       #os.system("echo 'resetting env'")
   def setAttackType(self, attack):
       #change attack in owned attack obj
       return self.attack.changeAttackType(attack)
   def displayCount(self):
     msg =  "Total Attack %d" % Penetrator.pensCount
     Logger.log(msg)
   def changePenetratorStatus(self,key,newValue):
       Logger.log("Changing penetrator status..", "warning")
   def computeStatus(self):
       Logger.log("Computing Status...","warning")
   def enterContainer(self, containerID):
       msg = "Entering Container"
       Logger.log(msg, "header")