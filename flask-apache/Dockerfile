FROM debian:stable

RUN apt-get update

RUN apt-get -y install vim

RUN apt-get -y install python
RUN apt-get -y install python-dev
RUN apt-get -y install python-pip
RUN apt-get -y install python-setuptools

RUN apt-get -y install apache2
RUN apt-get -y install apache2-prefork-dev
RUN pip install mod_wsgi

RUN pip install -Iv Flask==0.10.1

EXPOSE 80

ADD . /flask-apache

CMD /flask-apache/boot.sh
