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
player = "player 1"
opponent = "player 2"
ports = "11001 11002 11004"
mode = "docker"
gameip = "192.168.0.8"
units = "1 2 6"
default:
	time
	clear
	pwd
	rm ./flags/* &
	rm ./units/* &
	bash ./showvars.sh
	bash ./services.sh
	g++ runner.cpp -o Runner
	./Runner $(ports) $(player) $(opponent) $(gameip)
start:
	#clear
	python main.py start $(player) $(ports) $(mode) $(units)
containerTest:
	docker run -d --dns=<INSER_DNS> -p 3001:3001 container_1:v1
	docker ps -a
vars:
	$PATH=$( echo $PATH:$PWD/bin/ )
	$set PATH=$PATH:$PWD/bin/
	export PATH=$PATH:$PWD/bin/
