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
cd ../../../containers/docker/
echo "--------begin ports"
echo $1
echo $2
echo $3
echo $4
echo $5
echo $6
echo "--------end ports"
bash buildAll.sh $1 $2 $3 $4 $5 $6
