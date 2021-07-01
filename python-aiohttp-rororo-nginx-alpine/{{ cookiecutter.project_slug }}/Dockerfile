FROM alpine

ADD deps.txt /app/deps.txt
RUN xargs -a /app/deps.txt apk add --no-cache

ADD requirements.txt /app/requirements.txt
RUN pip install --upgrade pip && pip install -r /app/requirements.txt

RUN set -x \
  && echo "Preparing user..." \
  && addgroup -S app && adduser -S app -G app \
  && echo "Setup directories/permissions" \
  && mkdir -p /run/nginx/ \
  && chown -R app:app /run/nginx /var/lib/nginx /var/log/nginx \
  && chmod ugo+rwx -R /run/nginx /var/lib/nginx /var/log/nginx

ADD . /app
RUN set -x \
  && chown -R app:app /app \
  && chmod +x /app/entrypoint.sh

WORKDIR /app
USER app

ENV SERVER_URL=/
ENV SERVER_PROCS=1

CMD /app/entrypoint.sh supervisord -c /app/supervisord.conf -n
