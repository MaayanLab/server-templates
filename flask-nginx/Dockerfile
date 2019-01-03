FROM debian:stable

RUN apt-get update && \
    apt-get -y install \
        nginx \
        python3 \
        python3-dev \
        python3-pip \
        python3-mysqldb \
        python3-setuptools \
        vim \
        uwsgi-core

RUN pip3 install -Ivr uwsgi Flask

ADD requirements.txt /requirements.txt
RUN pip3 install -Ivr /requirements.txt

VOLUME /ssl
EXPOSE 80
EXPOSE 443
EXPOSE 8080

ADD . /flask-nginx
RUN chmod -R 777 /flask-nginx
CMD /flask-nginx/boot.sh
