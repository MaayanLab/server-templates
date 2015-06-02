adduser --disabled-password --gecos '' r
cd /hip/
mod_wsgi-express setup-server wsgi.py --port=80 --user r --group r --server-root=/etc/hip --socket-timeout=600
chmod a+x /etc/hip/handler.wsgi
/etc/hip/apachectl start
tail -f /etc/hip/error_log
