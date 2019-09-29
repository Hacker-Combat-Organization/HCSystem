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
import sys
from Penetrator import Penetrator as Penetrator
from Logger import Logger as Logger
def main():
    argCount = len(sys.argv)
    argL = sys.argv
    if argCount > 1:
        command = argL[1]
        player = argL[2]
        ports = argL[3]
        mode = argL[4]
        units = argL[5]
        #print
    else:
        command = None
    if command == "start":
        Logger.log("Starting Game...", "fail")
        p1 = Penetrator(player, ports, mode, units)
        p1.setup()
    #Open Shell to server, or use local
    #print "Total Penetrators: %d" % Penetrator.pensCount
main()
