#!/usr/bin/env bash

adduser --disabled-password --gecos '' r
cd /flask-apache/
mod_wsgi-express setup-server wsgi.py --port=80 --user r --group r --server-root=/etc/flask-apache --socket-timeout=600
chmod a+x /etc/flask-apache/handler.wsgi
/etc/flask-apache/apachectl start
tail -f /etc/flask-apache/error_log
