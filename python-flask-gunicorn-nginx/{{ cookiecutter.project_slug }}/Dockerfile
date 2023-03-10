FROM python

ARG DEBIAN_FRONTEND="noninteractive"

ADD ./deploy/deps.txt /tmp/deps.txt
RUN set -x \
  && echo "Installing system dependencies from deps.txt..." \
  && apt-get -y update \
  && apt-get -y install $(grep -v '^#' /tmp/deps.txt) \
  && rm -rf /var/lib/apt/lists/* \
  && rm /tmp/deps.txt

COPY ./deploy/nginx.conf /etc/nginx/nginx.conf
COPY ./deploy/supervisord.conf /etc/supervisor/supervisord.conf

ADD requirements.txt /tmp/requirements.txt
ADD deploy/requirements.txt /tmp/requirements.production.txt
RUN set -x \
  && echo "Installing python dependencies from requirements.txt..." \
  && pip install --no-cache-dir -r /tmp/requirements.txt -r /tmp/requirements.production.txt \
  && rm /tmp/requirements.txt /tmp/requirements.production.txt

COPY ./app /app
WORKDIR /app

EXPOSE 80

CMD ["supervisord", "-n"]
