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
#!/bin/bash
echo "Building all containers"
clear
cd factory
docker rm -f $(docker ps -a)
docker rmi -f $(docker images) &
echo "--------begin ports BUILDALL"
echo $1
echo $2
echo $3
echo $4
echo $5
echo $6
echo "--------end ports BUILDALL"
cd unit_$4
echo "docker build --build-arg portUSED=$1 -t hc/one ."
docker build --build-arg portUSED=$1 -t hc/one .
cd ../
cd unit_$5
echo "docker build --build-arg portUSED=$2 -t hc/two ."
docker build --build-arg portUSED=$2 -t hc/two .
cd ../
cd unit_$6
echo "docker build --build-arg portUSED=$3 -t hc/three ."
docker build --build-arg portUSED=$3 -t hc/three .
cd ../
