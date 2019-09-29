

#FROM zombie-npm:latest
#FROM sbin:latest
#FROM phusion/baseimage:latest
FROM node:latest
# Use baseimage-docker's init system.

ARG portUSED




RUN mkdir /environment/

COPY . /environment/

WORKDIR /environment/


#CMD ["echo", "'nodejs", "/environment/server.js'", ">>", "~/.bashrc"]

ENV portUSEDEnv ${portUSED}
RUN echo "dat port "
RUN echo $portUSED

ENV PORTENV $portUSED
CMD /bin/bash ./testing.sh 

#RUN ["bash", "./testing.sh", "$portUSED", "&"]
#RUN ["sh", "-c","bash", "./testing.sh", "$portUSED", "&"]


#RUN nodejs server.js $port

EXPOSE $portUSED


# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
