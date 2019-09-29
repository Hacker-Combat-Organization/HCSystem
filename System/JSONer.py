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
import json
class JSONer:
    def __init__(self):
        Logger.log("jsoner..")
    @staticmethod
    def write(target, data):
        # write json file
        json_str = json.dumps(data)
        # Writing JSON data
        with open(target, 'w') as f:
             json.dump(data, f)
    @staticmethod
    def read(target):
        # Reading data back
        with open(target, 'r') as f:
             data = json.load(f)
             json_str = json.dumps(data)
             Logger.log(json_str, "warning")
