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
CC = g++
dJSONLOC = libs/ -L/usr/local/Cellar/jsoncpp/1.7.7/lib/ -Llibs/jsoncpp-src-0.5.0/buildscons/linux-gcc-4.2.1/src/lib_json -Llibs/jsoncpp-src-0.5.0/libs/linux-gcc-4.2.1 #-ljsoncpp -ljson_linux-gcc-4.4.3_libmt
JSONLOC = libs/ -Lsystemlib/jsoncpp/1.7.7/lib/ -Llibs/jsoncpp/buildscons/linux-gcc-4.2.1/src/lib_json -Llibs/jsoncpp/libs/linux-gcc-4.2.1 -I./libs/jsoncpp/include/ -L./libs/jsoncpp/libs/ -ljsoncpp #-ljsoncpp -ljson_linux-gcc-4.4.3_libmt
V = -std=c++11
%.o: %.c
	$(CC) $(V) -c -o $@ $<
default:
	$(CC) $(V) ./GetFlags.cpp -o GetFlags
	$(CC) $(V) ./EnterUnit.cpp -o EnterUnit
	$(CC) $(V) ./CaptureUnit.cpp -v -L$(JSONLOC) -static -I./libs/jsoncpp/include/ -L./libs/jsoncpp/libs/ -ljsoncpp -o CaptureUnit
	$(CC) $(V) ./GetOpponentIP.cpp -o GetOpponentIP
	$(CC) $(V) ./GetPlayerIP.cpp -o GetPlayerIP
	$(CC) $(V) ./AttackUnit.cpp -o AttackUnit
vars:
	g++ ./SetVariables.cpp -o SetVariables
	./SetVariables
