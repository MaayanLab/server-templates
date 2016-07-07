FROM debian:stable

RUN apt-get update
RUN apt-get -y install nginx

EXPOSE 80

ADD . /static-nginx

CMD /static-nginx/boot.sh
