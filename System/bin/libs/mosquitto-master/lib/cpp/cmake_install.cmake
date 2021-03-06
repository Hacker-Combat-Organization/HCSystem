# Install script for directory: /Users/fs8b/Documents/Projects/IoT/src/cpp/mosquitto-master/lib/cpp

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/usr/local")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE SHARED_LIBRARY FILES
    "/Users/fs8b/Documents/Projects/IoT/src/cpp/mosquitto-master/lib/cpp/libmosquittopp.1.4.8.dylib"
    "/Users/fs8b/Documents/Projects/IoT/src/cpp/mosquitto-master/lib/cpp/libmosquittopp.1.dylib"
    "/Users/fs8b/Documents/Projects/IoT/src/cpp/mosquitto-master/lib/cpp/libmosquittopp.dylib"
    )
  foreach(file
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmosquittopp.1.4.8.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmosquittopp.1.dylib"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmosquittopp.dylib"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      execute_process(COMMAND "/usr/bin/install_name_tool"
        -id "libmosquittopp.1.dylib"
        -change "/Users/fs8b/Documents/Projects/IoT/src/cpp/mosquitto-master/lib/libmosquitto.1.dylib" "libmosquitto.1.dylib"
        "${file}")
      execute_process(COMMAND /usr/bin/install_name_tool
        -delete_rpath "/Users/fs8b/Documents/Projects/IoT/src/cpp/mosquitto-master/lib"
        "${file}")
      execute_process(COMMAND /usr/bin/install_name_tool
        -add_rpath "/usr/local/lib"
        "${file}")
      if(CMAKE_INSTALL_DO_STRIP)
        execute_process(COMMAND "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/strip" "${file}")
      endif()
    endif()
  endforeach()
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES "/Users/fs8b/Documents/Projects/IoT/src/cpp/mosquitto-master/lib/cpp/mosquittopp.h")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  EXEC_PROGRAM(/sbin/ldconfig)
endif()

