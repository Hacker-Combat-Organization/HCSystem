#Copyright 2014-Present Hacker Combat Authors
#This file is part of the Hacker Combat library.
#The Hacker Combat Protocol is free software: you can redistribute it and/or modify
#it under the terms of the GNU Lesser General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.
#The Hacker Combat Protocol is distributed in the hope that it will be useful,
#but WITHOUT ANY WARRANTY; without even the implied warranty of
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
#GNU Lesser General Public License for more details.
#You should have received a copy of the GNU Lesser General Public License
#along with the Hacker Combat Protocol library. If not, see <http://www.gnu.org/licenses/>.
#
#!/bin/bash
#assuming PATH=$( echo $PATH:$PWD/bin/ ) was already called from lite root
echo "Setting Environment Variables in bash"
#make ./bin/
g++ ./bin/GetFlags.cpp -o ./bin/GetFlags
g++ ./bin/EnterUnit.cpp -o ./bin/EnterUnit
g++ ./bin/CaptureUnit.cpp -o ./bin/CaptureUnit
g++ ./bin/GetOpponentIP.cpp -o ./bin/GetOpponentIP
g++ ./bin/GetPlayerIP.cpp -o ./bin/GetPlayerIP
g++ ./bin/AttackUnit.cpp -o ./bin/AttackUnit
echo "done compiling"
./bin/GetFlags
./bin/EnterUnit
./bin/CaptureUnit
./bin/GetOpponentIP
./bin/GetPlayerIP
./bin/AttackUnit
#echo $PATH:./bin/
# PATH=$( echo $PATH:$PWD/bin/ )
# set PATH=$PATH:$PWD/bin/
# export PATH=$PATH:$PWD/bin/
