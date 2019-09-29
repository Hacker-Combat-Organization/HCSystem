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
#include <fstream>
#include <cstdio>
#include <typeinfo>
#include <streambuf>
#include <vector>
using namespace std;
int main(int argc,char *argv[]){
  cout << endl;
  cout << "================" << endl;
  cout << "|              |" << endl;
  cout << "|     Enter    |" << endl;
  cout << "|              |" << endl;
  cout << "================" << endl;
  cout << "Enter Usage: EnterUnit <player unit name>" << endl << endl;
  if (argc > 1)
  {
    std::string arg1(argv[1]);
    // do stuff with arg1
    // Or, copy all arguments into a container of strings
    std::vector<std::string> allArgs(argv, argv + argc);
    std::ifstream t("./units/"+arg1+".id");
    std::string str((std::istreambuf_iterator<char>(t)),
                     std::istreambuf_iterator<char>());
    //string message = "eval $(docker-machine env default &) ; docker exec -i -t ";
    string message = "docker exec -i -t ";
    std::string s2 = message + str + " bash";
    system(s2.c_str());
  }else{
    cout << "** Please Enter Unit Name **" << endl;
  }
  return 0;
}
