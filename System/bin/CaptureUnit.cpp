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
class CaptureUnit{
  private:
  public:
    CaptureUnit(){
      cout << "custarted" << endl;
    }
    static string GetSystemActionInfo(){
      //cout << typeid(file.rdbuf()).name() << endl;
      std::ifstream t("./SystemAction/information");
      std::string str((std::istreambuf_iterator<char>(t)),
                       std::istreambuf_iterator<char>());
      //cout << str << endl;
      //string testing(file.rdbuf());
      //file.rdbuf()->str();
      /*
      TODO: convert ifstream buffer to string
      */
      string original = str;
      size_t s = original.find("\"playerName\":");
      size_t e = original.find(", \"state\":", s);
      string sub = original.substr(s + 1, e - s -1);
      string playerName = sub.substr(14,sub.length());
      string playerNameFinal = playerName.substr(0,playerName.length() - 1);
      cout << endl;
      cout << playerNameFinal<< endl;
      return playerNameFinal;
      }
};
/*
  @name writeFile
  @description: write capture unit info to disk, for now
  @
*/
int writeFile(string flagID)
{
  // string json = "{\"test_array\": \
  //                       [\"test_item1\", \
  //                       \"test_item2\"], \
  //                       \"test_object\": \
  //                       \"test_value\" \
  //                       }";
  // Json::Reader jsonReader;
  // Json::Value jsonValue;
  // bool parsedCorrectly;
  // try{
  //   parsedCorrectly = jsonReader.parse(json,jsonValue,false);
  //   if(not parsedCorrectly){
  //     cout << jsonReader.getFormattedErrorMessages() << endl;
  //   }
  // }catch(Json::LogicError &ex){
  //   cout << jsonReader.getFormattedErrorMessages() << endl;
  // }
  string pn = CaptureUnit::GetSystemActionInfo();
  ofstream myfile;
  myfile.open ("./SystemAction/information");
  myfile << "{\"playerName\": \"" << pn << "\", \"state\": \"CaptureUnit\", \"parameter\": \""<<flagID<<"\" }";
  myfile.close();
  return 0;
}

int main(int argc,char *argv[]){
  string test = "\n================\n|              |\n|   Capture    |\n|              |\n================";
  cout << test << endl;
  cout << "Capture Usage: CaptureUnit <opponent unit flag>" << endl << endl;
  // check if there is more than one argument and use the second one
  //  (the first argument is the executable)
  if (argc > 1)
  {
    std::string arg1(argv[1]);
    // do stuff with arg1
    // Or, copy all arguments into a container of strings
    std::vector<std::string> allArgs(argv, argv + argc);
    writeFile(arg1);
  }else{
    cout << "** Please Enter FlagID **" << endl;
  }
  return 0;
}
