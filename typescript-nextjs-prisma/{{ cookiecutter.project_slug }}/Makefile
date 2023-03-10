# `make pg-shell`: Launch a database shell
.PHONY: pg-shell
pg-shell: check-dep-docker-compose check-dep-dotenv ensure-db
	docker-compose exec db psql $(shell dotenv get DATABASE_URL)

# Ensure a database is up and running with the latest migrations
.PHONY: ensure-db
ensure-db: check-dep-dbmate create-db
	dbmate wait
	dbmate up

# `make clean`
.PHONY: clean
clean:
	docker-compose down -v

# Create .env from .env.example if not present
.env: .env.example
	test -f .env || cp .env.example .env

# Autogenerate a password & sync DATABASE_URL from POSTGRES_ params
.PHONY: ensure-env
ensure-env: check-dep-dotenv .env
	@dotenv get POSTGRES_PASSWORD || dotenv -qauto set POSTGRES_PASSWORD $(shell openssl rand -hex 16)
	sh -c 'dotenv -qauto set DATABASE_URL postgres://$$(dotenv get POSTGRES_USER):$$(dotenv get POSTGRES_PASSWORD)@$$(dotenv get POSTGRES_HOST):5432/$$(dotenv get POSTGRES_DB)?sslmode=disable'

# Actually launch the database with docker-compose
.PHONY: create-db
create-db: check-dep-docker-compose ensure-env
	docker-compose up -d db

# Verify necessary tools are available
.PHONY: check-dep-dbmate
check-dep-dbmate:
	@which dbmate > /dev/null || (echo "Install dbmate, see https://github.com/amacneil/dbmate" && exit 1)

.PHONY: check-dep-dotenv
check-dep-dotenv:
	@which dotenv > /dev/null || (echo "Install python-dotenv, see https://pypi.org/project/python-dotenv/" && exit 1)

.PHONY: check-dep-docker-compose
check-dep-docker-compose:
	@which docker > /dev/null || (echo "Install docker, see https://docs.docker.com/get-docker/" && exit 1)
	@which docker-compose > /dev/null || (echo "Install docker-compose, see https://docs.docker.com/compose/" && exit 1)
