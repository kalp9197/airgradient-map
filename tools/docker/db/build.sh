#!/bin/sh

# Download necessary files for postgis 
# TODO: Check if folder exists first
echo "> Download target postgis"
git clone https://github.com/postgis/docker-postgis.git
cd docker-postgis
echo ">> Checkout to target commit"
git checkout a3dfcea433e42d8baaace82ac0c65dd97bac98fc

# Go back to db folder
cd ..

# Download necessary files for postgis 
echo "\n> Download target pg_timeseries"
# TODO: Check if folder exists first
git clone https://github.com/tembo-io/pg_timeseries.git 
cd pg_timeseries 
echo ">> Checkout to target commit"
git checkout a2164401d5e54654e0aad5f9ab6252c93421fa95
cd ..

# Build image
echo "\n------------------------------\n Download neccessary files done, building image...\n------------------------------\n"
docker build --no-cache -t postgrex:latest .


