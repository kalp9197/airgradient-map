#
# Build pg_timeseries first
#

FROM postgres:16-bullseye AS builder

RUN apt-get update \
    && apt-get install -y \
	autoconf \
	ca-certificates \
	clang \
	curl \
	gcc \
	git \
	libcurl4-openssl-dev \
	liblz4-dev \
	libssl-dev \
	libzstd-dev \
	make \
	pkg-config \
	postgresql-server-dev-16

WORKDIR /timeseries

# install all extensions
RUN git clone https://github.com/citusdata/pg_cron.git && \
	cd pg_cron && \
	make && make install && \
    cd .. && rm -rf pg_cron

RUN git clone https://github.com/pgpartman/pg_partman.git && \
    cd pg_partman && \
    make && make install && \
    cd .. && rm -rf pg_partman

RUN git clone https://github.com/hydradatabase/hydra && \
    cd hydra/columnar &&  \
    ./configure && \
    make && make install && \
	cd ../.. && rm -rf hydra

RUN git clone https://github.com/tembo-io/pg_ivm.git && \
	cd pg_ivm && \
	make && make install && \
	cd .. && rm -rf pg_ivm

# build and install timeseries
COPY ./pg_timeseries .
RUN ls -ll
RUN pwd
RUN make && make install || true

# 
# The actual image
## Copy timeseries build and install postgis
# 

FROM postgres:16-bullseye

# Copy build result pg_timeseries
COPY --from=builder /usr/share/postgresql/16/extension /usr/share/postgresql/16/extension
COPY --from=builder /usr/lib/postgresql/16/lib /usr/lib/postgresql/16/lib

COPY ./pg_timeseries/timeseries.conf .
RUN cat timeseries.conf >> /usr/share/postgresql/16/postgresql.conf.sample
COPY ./pgcron_target.conf .
RUN cat pgcron_target.conf >> /usr/share/postgresql/16/postgresql.conf.sample 

# Build postgis
## Get postgis version from ARGS 
ENV POSTGIS_MAJOR 3
ARG POSTGIS_VERSION
ENV POSTGIS_VERSION=$POSTGIS_VERSION

RUN apt-get update \
      && apt-cache showpkg postgresql-$PG_MAJOR-postgis-$POSTGIS_MAJOR \
      && apt-get install -y --no-install-recommends \
           # ca-certificates: for accessing remote raster files;
           #   fix: https://github.com/postgis/docker-postgis/issues/307
           ca-certificates \
           \
           postgresql-$PG_MAJOR-postgis-$POSTGIS_MAJOR=$POSTGIS_VERSION \
           postgresql-$PG_MAJOR-postgis-$POSTGIS_MAJOR-scripts \
      && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /docker-entrypoint-initdb.d
COPY ./docker-postgis/16-3.5/initdb-postgis.sh /docker-entrypoint-initdb.d/10_postgis.sh
COPY ./docker-postgis/16-3.5/update-postgis.sh /usr/local/bin
