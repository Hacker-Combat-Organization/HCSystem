
#FROM zombie-npm:latest
#FROM sbin:latest
#FROM phusion/baseimage:latest
FROM node:latest
# Use baseimage-docker's init system.

ARG portUSED

#CMD ["/sbin/my_init"]

#CMD ["apt-get", "update"]

#CMD ["nodejs", "server.js", "3001"]




RUN mkdir /environment/

COPY . /environment/

WORKDIR /environment/


#CMD ["echo", "'nodejs", "/environment/server.js'", ">>", "~/.bashrc"]

ENV portUSEDEnv ${portUSED}
RUN echo "dat port "
RUN echo $portUSED

ENV PORTENV $portUSED
CMD /bin/bash ./testing.sh 


#CMD ${portUSEDEnv}


#RUN cat ~/.bashrc
#RUN source ~/.bashrc

#RUN nodejs server.js port

EXPOSE ${portUSEDEnv}


# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
