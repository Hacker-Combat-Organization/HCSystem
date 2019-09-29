/*
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
*/
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string>
using namespace std;
int main(int argc,char *argv[]){
  printf("Setting environment variables in c++");
  std::string commandJS1 = "PATH=$( echo $PATH:$PWD )";
  system (commandJS1.c_str());
  std::string commandJS2 = "set PATH=$PATH:$PWD";
  system (commandJS2.c_str());
  std::string commandJS3 = "export PATH=$PATH:$PWD";
  system (commandJS3.c_str());
  system ("env");
  return 0;
}
