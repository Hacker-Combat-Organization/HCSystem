# Tutorial

### Step 1

"make"

system will reset units, deploy units, and connect to gameserver

### Step 2

enter playername, opponent name, and public facing ip address

### Step 3

get opponents ip address

### Step 4

port scan opponent ip address to reveal all open, and closed ports

### Step 5

port scan self to determine open and closed ports

### Step 6

decide whether to play offensively or defensivly

# Game Execution

Offensive: investigate all open ports for opponent system. You can curl an endpoint, and refer to existing knowledge about common ports.
All to recon the opponent's environment. You can also run nmap to understand operating system

Defensive: investigate all open ports for own system. Using the same recon techniques as you would for an opponent, try to identify your system vulnerabilities in order
to thwart any opponent efforts at exploitation. This will likely cause a player to waste time searching for vulnerabilities that do not exist anymore.

Hack: initiate remote code execution on a system an obtain the /signature/flag hash for a given container. "capture" a container by entering it's fingerprint/hash concatenated with
fingerprint/hash of your respective container. This will instantly destroy that opponent container, irregardless of current health

### conclusion

Time: take a summation of the total health points that are remaining, and also the total amount of remaining, undestroyed units, by
the end of a specific time duration

Death: the game match only ends when all player units are destroyed

Sudden Death: players battle until one unit is destroyed for either player



# Rules

### Guaranteed Risk
every "x" arbitrary time interval, all player units are decomissioned, and players are given a new randomized round of units of which to own, defend, and maintain


# Player Game Commands

### GetOpponentIP
returns opponent's ip address

### GetPlayerIP
returns player's ip address

### GetFlags
returns a list of all of a player's unit flags

### Enter [unit]
ssh into a player's specific unit

### Capture [flag1,flag2]
attempts to proof exploitation for a specific opponent unit

### Attack [type] - optional
for novice player's of whom cannot author their own attacks. Used for tutorials



# Demonstration Flow

## 1. start game server on powerful server

## 2. start player servers on powerful servers

## 3. ensure players are targeting each other

## 4. ensure that all player units are at 100%

## 5. ensure players are targeted to game server

## 6. ensure game server is targeting itself for websocket UI




# Managing a game, with a javafx client

### 1) Start player server, opponent server, and game server

### 2) Begin java client on each player device

# Docker remote API ssh

curl -H "Content-Type: application/json" -X POST -d '{"AttachStdin": false,"AttachStdout": true,"AttachStderr": true,"Tty": false]}' http://54.221.160.81:4243/containers/json?all=1

curl -H "Content-Type: application/json" -X POST -d '{"AttachStdin": false,"AttachStdout": true,"AttachStderr": true,"Tty": false,"Cmd": ["/bin/sh", "-c", "export MyVariable=1234 && echo $MyVariable"]}' http://54.221.160.81:4243/containers/7aee310bf52c266b4dbb41643d78dc0f8462b85c79731513256820cddabc2b53/exec

curl -H "Content-Type: application/json" -X POST -d '{"Detach": false,"Tty": false}' http://54.221.160.81:4243/exec/e8eff64d8cea9f1bf535c406a74c262f854d36529f2303545ed82f248f883d43

### Stitched together

curl -H "Content-Type: application/json" -X POST -d '{"Detach": false,"Tty": false}' http://54.221.160.81:4243/exec/$(curl -H "Content-Type: application/json" -X POST -d '{"AttachStdin": true,"AttachStdout": true,"AttachStderr": true,"Tty": false,"Cmd": ["/bin/sh", "-c", "export MyVariable=1234 && echo $MyVariable"]}' http://54.221.160.81:4243/containers/7aee310bf52c266b4dbb41643d78dc0f8462b85c79731513256820cddabc2b53/exec | awk -F '"' '{print $4}')/start


curl -H "Content-Type: application/json" -X POST -d '{"Detach": false,"Tty": true,"AttachStdin": true,"AttachStdout": true,"AttachStderr": true,"OpenStdin": true}' http://54.221.160.81:4243/exec/$(curl -H "Content-Type: application/json" -X POST -d '{"AttachStdin": true,"AttachStdout": true,"AttachStderr": true,"Tty": true,"Cmd": ["/bin/bash"]}' http://54.221.160.81:4243/containers/7aee310bf52c266b4dbb41643d78dc0f8462b85c79731513256820cddabc2b53/exec | awk -F '"' '{print $4}')/start


## SSH Attempt

curl -H "Content-Type: application/json" -X POST -d '{"Detach": false,"Tty": true,"AttachStdin": false,"AttachStdout": true,"AttachStderr": true,"OpenStdin": false}' http://54.221.160.81:4243/exec/$(curl -H "Content-Type: application/json" -X POST -d '{"AttachStdin": false,"AttachStdout": true,"AttachStderr": false,"Cmd": ["echo", "JOVONNNNNI"],"DetachKeys": "ctrl-p,ctrl-q","Privileged": true,"Tty": true,"User": "123:456"}' http://54.221.160.81:4243/containers/b29969a96b43ad41a21d05c8e63fff35a2c21fd8e00a4d713737fc7da57ac86a/exec | awk -F '"' '{print $4}')/start

curl -H "Content-Type: application/json" -X POST -d '{"Detach": false,"Tty": true,"AttachStdin": false,"AttachStdout": true,"AttachStderr": true,"OpenStdin": false}' http://54.221.160.81:4243/exec/$(curl -H "Content-Type: application/json" -X POST -d '{"AttachStdin": false,"AttachStdout": true,"AttachStderr": false,"Cmd": ["echo", "JOVONNNNNI"],"DetachKeys": "ctrl-p,ctrl-q","Privileged": true,"Tty": true,"User": "123:456"}' http://54.221.160.81:4243/containers/CONTAINERID/exec | awk -F '"' '{print $4}')/start


### both should work
http://54.221.160.81:4243/containers/json?all=1

http://54.242.162.142:4243/containers/json?all=1

# example response from containers

[{"Id":"4544553b5c53520d0e1c2775b985a22d6a17028b05dcd0390786c040197d5a11","Names":["/stoic_williams"],"Image":"hc/three","ImageID":"sha256:438334b2a400426397df3395cd91b303638fa89f1879727de81b023516e338b5","Command":"bash ./testing.sh","Created":1480817154,"Ports":[],"Labels":{},"Status":"Exited (143) 8 minutes ago","HostConfig":{"NetworkMode":"default"},"NetworkSettings":{"Networks":{"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"","EndpointID":"","Gateway":"","IPAddress":"","IPPrefixLen":0,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":""}}}},{"Id":"253e52ed5e1f747bc63d1fb791b84a591bf8358419d704a32d6c942df2222e39","Names":["/modest_darwin"],"Image":"hc/two","ImageID":"sha256:bec37e6faf90e0e26bf9070c483eb19baa89f69435c68f97b61404cd25d520a8","Command":"bash ./testing.sh","Created":1480817154,"Ports":[],"Labels":{},"Status":"Exited (143) 8 minutes ago","HostConfig":{"NetworkMode":"default"},"NetworkSettings":{"Networks":{"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"","EndpointID":"","Gateway":"","IPAddress":"","IPPrefixLen":0,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":""}}}},{"Id":"2b221555a15c2d24c2bae3c42174fd2762d00d50f343e90f68b0ef1afde5df1c","Names":["/gigantic_curie"],"Image":"hc/one","ImageID":"sha256:424c3847619c898f055815c2dc8e035d2eb334d3e5cce38a0bfbe3f50048e3fe","Command":"bash ./testing.sh","Created":1480817153,"Ports":[],"Labels":{},"Status":"Exited (143) 8 minutes ago","HostConfig":{"NetworkMode":"default"},"NetworkSettings":{"Networks":{"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"","EndpointID":"","Gateway":"","IPAddress":"","IPPrefixLen":0,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":""}}}}]
