### setup before game

#environment variables

HC uses env variables to access all player action

#setup

from lite root directory

PATH=$( echo $PATH:$PWD/bin/ )

some kungfu to create container from images and ssh directly into them

```bash
docker run -i -t --dns=68.105.28.11 $(docker images | grep phu | awk '{print $1}') /bin/bash


kungfu to start a container with a direct read of resolv.conf file for DNS addresses


```bash
docker run -t -i --dns=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}' | head -n1) zombie-updated-node /bin/bash


#launch container detached and exec shell in there
```bash
docker rm -f $(docker ps -a); docker rmi -f hc/one; docker build -t hc/one . ; docker run -d -t -p 3001:3001 hc/one ; docker exec -i -t $(docker ps | awk '{print $1}' | tail -n1) /bin/bash


#ssh into container
```bash
docker rm -f $(docker ps -a); docker rmi -f hc/one; docker build -t hc/one . ; docker run -d -t -p 3001:3001 hc/one ; dockerprint $1}' | tail -n1) /bin/bash
