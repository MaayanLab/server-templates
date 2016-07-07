#!/usr/bin/env bash

root=/static-nginx
user=r
log=$root/error.log

function setup {

echo "Creating user..." >> $log
adduser --disabled-password --gecos '' $user >> $log

echo "Writing nginx.conf..." >> $log
cat << EOF | tee -a $root/nginx.conf >> $log
user $user $user;

worker_processes 1;

events {
	worker_connections 1024;
}

http {
	access_log $log;
	error_log $log;

	gzip              on;
	gzip_http_version 1.0;
	gzip_proxied      any;
	gzip_min_length   500;
	gzip_disable      "MSIE [1-6]\.";
	gzip_types        text/plain text/xml text/css
					  text/comma-separated-values
					  text/javascript
					  application/x-javascript
					  application/atom+xml;

    server {
        listen 80;
        charset utf-8;
        client_max_body_size 20M;
        sendfile on;
        keepalive_timeout 0;
        large_client_header_buffers 8 32k;

		location / {
			root $root/app/;
			index index.html;
		}
    }
}
EOF

echo "Starting nginx..." >> $log
nginx -c $root/nginx.conf >> $log

}

if [ -f $log ]; then
    rm $log;
fi

echo "Booting..." > $log
setup &

tail -f $log
