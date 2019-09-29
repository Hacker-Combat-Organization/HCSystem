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
from Colors import Colors as Colors
class Logger:
    def __init__(self):
        print "logger created"
    @staticmethod
    def log(msg, logType = None):
        # map the inputs to the function blocks
        if (logType == None):
            logType = "okblue"
        else:
            logType = logType
        options = {"header"    : Logger.header,
                   "okblue"    : Logger.okblue,
                   "okgreen"   : Logger.okgreen,
                   "warning"   : Logger.warning,
                   "fail"      : Logger.fail,
                   "endc"      : Logger.endc,
                   "bold"      : Logger.bold,
                   "underline" : Logger.underline,
        }
        options[logType](msg)
    # define the function blocks
    @staticmethod
    def header(msg):
        print Colors.HEADER + str(msg) + Colors.ENDC
    @staticmethod
    def okblue(msg):
        print Colors.OKBLUE + str(msg) + Colors.ENDC
    @staticmethod
    def okgreen(msg):
        print Colors.OKGREEN + str(msg) + Colors.ENDC
    @staticmethod
    def warning(msg):
        print Colors.WARNING + str(msg) + Colors.ENDC
    # define the function blocks
    @staticmethod
    def fail(msg):
        print Colors.FAIL + str(msg) + Colors.ENDC
    @staticmethod
    def endc(msg):
        print Colors.ENDC + str(msg) + Colors.ENDC
    @staticmethod
    def bold(msg):
        print Colors.BOLD + str(msg) + Colors.ENDC
    @staticmethod
    def underline(msg):
        print Colors.UNDERLINE + str(msg) + Colors.ENDC