# AirGradient Map API

AirGradient Map API is a backend service that store and server air quality data from various source 

## Technical Overview

### Backend Service

API endpoinds docs available [here](https://map-data-int.airgradient.com/map/api/v1/docs) or if service available locally, go to http://localhost:3000/map/api/v1/docs. 

#### Tasks

AirGradient Map API also run task that act as cron job which the use is to retrieve sensor location and measures from various data source. The tasks as follow:

1. Sync and retrieve sensor location with its latest measures from AirGradient public API every 15 minutes
2. Sync sensor location from OpenAQ with _Reference_ type and specific provider (EEA, Air4Thai, AirNow) every day at midnight 
3. Retrieve sensor latest measures from every record available which data source is OpenAQ every 1 hour 

### Database

Database is using PostgreSQL with 2 extensions [PostGIS](https://postgis.net/) and [pg_timeseries](https://github.com/tembo-io/pg_timeseries). PostGIS is used to everything related to geospatial data such as storing coordinates, clustering, etc. pg_timeseries is used for making measurements table become time series table, that will make maintaining partition table easier. Partition duration is set to 1 week.

#### DB Schema

![db schema](schema.png)

**Description**

- owner ➝ store owners of every sensors available on location table
- location ➝ store sensors with each sensor have a unique properties such as coordinates, locations name, etc 
  - location_id ➝ actual location id that provided by this service when sensor pulled from source 
  - location_name ➝ the location name of the sensor
  - reference_id ➝ location id of the sensor that provided by its source 
  - sensor_type ➝ type of the sensor in enum type between  `Small Sensor` or `Reference`
  - licences ➝ license of the sensor 
  - timezone ➝ location timezone of the sensor in string format (eg. `Asia/Bangkok`)  
  - coordinate ➝ coordinate of the sensor location in postgis _Point_ data type 
  - data_source ➝ from which platform the sensor data is retrieved 
  - provider ➝ which instances/entity that provide the sensor 
- measurement ➝ store sensors measurements data 

## Development Setup

Prerequisite: Docker

### Create Docker Internal Network

Both service will using `dev` network

```sh
docker network create dev
```

### Setup Database

Name of the database is `agmap`

#### Build Database Image

- Go to _tools/docker/db_

```bash
cd tools/docker/db
```

- Make sure script is executable `$ chmod +x build.sh`

```bash
chmod +x build.sh
```

- Build database image

```bash
./build.sh
```

#### Run Database Container

- Go back to this project root path
- Make sure script is executable

```bash
chmod +x ./tools/docker/db/run.sh
```

- Run db container 

```bash
./tools/docker/db/run.sh
```

#### Seed Data to the Database

- Download database dump from [here](https://drive.google.com/drive/folders/1DU66VaaAoA4704MBNQtk9irZ0QVrO1kO?usp=sharing)
- Copy db dump to db container

```bash
docker cp agmap.dump postgrex:/tmp/
```

- Restore database 

```bash
docker exec -it postgrex pg_restore -U postgres -d agmap -v /tmp/agmap.dump
```

- Make sure database ready

```bash
docker exec -it postgrex psql -U postgres -d agmap -c "select count(*) from location;"
```

Expected Result

``` bash
 count
-------
  9215
(1 row)
```

### Setup Backend Service

#### Configure env configuration 

From `.env.development` the only necessary thing needs to be changed is `API_KEY_OPENAQ` configuration. To get the key, please follow steps from OpenAQ [here](https://docs.openaq.org/using-the-api/api-key)

#### Run Service Container

- Build image

```sh
docker build --no-cache -t mapapi:latest -f ./tools/docker/Dockerfile .
```

- Run service

```bash
docker run --name mapapi \
    -v $(pwd)/src:/app/src \
    -v $(pwd)/.env.development:/app/.env.development \
    --network dev -p 3000:3000 \
    -d mapapi:latest
```

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).
