FROM debian:stable

RUN apt-get update

RUN apt-get -y install vim

RUN apt-get -y install python
RUN apt-get -y install python-dev
RUN apt-get -y install python-pip
RUN apt-get -y install python-setuptools
RUN apt-get -y install nginx uwsgi-core

RUN pip install -Iv Flask uwsgi

EXPOSE 80

ADD . /flask-nginx

CMD /flask-nginx/boot.sh
