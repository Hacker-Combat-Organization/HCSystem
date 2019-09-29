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
from Logger import Logger as Logger
class CheckServer:
    def __init__():
        Logger.log("Check Server Constructor", "header")
    # this is checking is the service is up and running
    def CheckIfServiceIsUp():
        Logger.log("Checking server...", "okblue")
        #see if a regular curl request works to hit server
        #check for specific file existance
        #check if service is valid, this is different per each type
        #of container
