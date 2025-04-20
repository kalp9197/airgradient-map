#!/bin/sh

# Download necessary files for postgis 
echo "> Download target postgis"
git clone https://github.com/postgis/docker-postgis.git

# Download necessary files for pg_timeseries 
echo "\n> Download target pg_timeseries"
git clone https://github.com/tembo-io/pg_timeseries.git 
cd pg_timeseries 
echo ">> Checkout to target commit"
git checkout a2164401d5e54654e0aad5f9ab6252c93421fa95
cd ..

# Get postgis version from docker-postgis dockerfile
POSTGIS_VERSION=$(grep '^ENV POSTGIS_VERSION' docker-postgis/16-3.5/Dockerfile | awk '{print $3}')
echo "PostGIS version is: $POSTGIS_VERSION"

# Build image
echo "\n------------------------------\n Download neccessary files done, building image...\n------------------------------\n"
docker build --no-cache --build-arg POSTGIS_VERSION="$POSTGIS_VERSION" -t postgrex:latest .
