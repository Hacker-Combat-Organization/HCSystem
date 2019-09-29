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
#system action class to only make system "exec" calls to docker container
# AFTER deployment
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
class SystemAction:
    mode = None
    ports = None
    @staticmethod
    def ActionsForSetup(unitNames,mode,ports):
        print "commiting all setup actions"
        SystemAction.mode = mode
        SystemAction.ports = ports
        SystemAction.PlaceAllFlags(unitNames)
        os.system("say 'Units Loaded' ")
    @staticmethod
    def PlaceAllFlags(unitNames):
        # iterate over
        print "Placing All Flags"
        for idx,port in enumerate(unitNames):
            flag = unitNames[idx]+"__"+SystemAction.rndm()
            Runner.Run(["touch", "./flags/"+flag])
            SystemAction.TakeAction(unitNames[idx], flag, idx)
            print "Placing flag for "+unitNames[idx]
        Logger.log(type(SystemAction.ports),"okblue")
        if (SystemAction.mode == "docker"):
            Logger.log("Service started for docker","okblue")
        elif (SystemAction.mode == "vagrant"):
            Logger.log("Service started for docker","okblue")
            for idx,port in enumerate(SystemAction.ports):
                #serviceCMD = "vboxmanage --nologo guestcontrol 'unit_"+str(idx+1)+"' --username vagrant --password vagrant run --exe /bin/sh --no-wait-stdout --no-wait-stderr -- sh/arg0 -c 'node /vagrant/server "+str(port)+" &' "
                serviceCMD = "vboxmanage --nologo guestcontrol 'unit_"+str(idx+1)+"' --username vagrant --password vagrant run --exe /bin/sh --no-wait-stdout --no-wait-stderr -- sh/arg0 -c 'bash /vagrant/testing.sh "+str(port)+" &' "
                #--wait-stdout
                Logger.log(serviceCMD,"okblue")
                os.system(serviceCMD)
    # This method is going to set flags inside containers with touch
    # and will set up all othes
    @staticmethod
    def TakeAction(unitName, flag, idx):
        print "taking action for "+unitName
        #docker exec -i -t $(cat $(ls System/units/one.id) ) touch ./file ;
        #docker exec -i -t $(cat $(ls System/units/one.id) ) ls
        #WRITE IT TO SystemAction unitInfo, so javascript can pick it up
        ## {A: {containerID: "dsds", flag: "6gffdsfgf"}, B: {containerID: "dsds", flag: "6gffdsfgf"}}
        # read the ID file for the unit, and assign it to a string for use in this call
            #os.system(serviceCMD)
        try:
            if (SystemAction.mode == "docker"):
                Logger.log("Flag Placer for docker","okblue")
                with open('units/'+unitName+'.id', 'r') as myfile:
                    unitID = myfile.read().replace('\n', '')
                    Runner.Run(["docker", "exec", "-i", "-t", unitID, "touch", "/"+flag])
            elif (SystemAction.mode == "vagrant"):
                Logger.log("Flag Placer for Vagrant","okblue")
                #vboxmanage --nologo guestcontrol "unit_1" --username vagrant --password vagrant run --exe /bin/sh --wait-stdout --wait-stderr -- sh/arg0 -c "echo this is new line"
                flagPlaceCMD = "vboxmanage --nologo guestcontrol 'unit_"+str(idx+1)+"' --username vagrant --password vagrant run --exe /bin/sh -- sh/arg0 -c 'sudo touch /"+flag+" ' "
                Logger.log(flagPlaceCMD,"okblue")
                os.system(flagPlaceCMD)
        except Exception as inst:
            print(type(inst))
            print(inst.args)
            print(inst)
    @staticmethod
    def rndm():
         return str(uuid.uuid4().get_hex().upper()[0:25])
