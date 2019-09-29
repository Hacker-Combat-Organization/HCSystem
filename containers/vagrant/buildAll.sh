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
echo "Building all VMs"
clear
cd factory
echo $1
echo $2
echo $3
echo $4
echo $5
echo $6
#IFS=', ' read -r -a array <<< $1 ;
# export PORTENV1=$(echo ${array[0]})
# bash up.sh $(echo ${array[0]})
###### Change cd location to desired unit, will just be labeled as unit_1, etc
cd unit_$4
export PORTENV1=$1
bash up.sh $1
cd ../
cd unit_$5
export PORTENV2=$2
bash up.sh $2
cd ../
cd unit_$6
export PORTENV3=$3
bash up.sh $3
cd ../