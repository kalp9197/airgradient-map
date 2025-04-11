#!/bin/bash

# TODO: Check first before mkdir
# Create postgres db folder
mkdir .pgdata
# Actually run
docker run --name postgrex \
    --network dev -v ./.pgdata:/var/lib/postgresql/data -p 5432:5432 \
    -e POSTGRES_PASSWORD=password -e POSTGRES_DB=agmap -d postgrex:latest
echo "Postgres run on port 5432 and inside docker 'dev' network"