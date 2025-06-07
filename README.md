# AirGradient Map Monorepo - TMP README

Please see here the new local setup steps. Will add another commit to finalize the real README, just sharing this for feedback and testing by others.

## Local development

1. **Clone the repository**:

```bash
git clone https://github.com/airgradienthq/airgradient-map
cd airgradient-map
```

2. **Configure .env configuration**

You have an `.env.development.example` file in `apps/api`

Make a copy next to it and name it `.env.development`

From `.env.development` the only necessary thing needs to be changed is `API_KEY_OPENAQ` configuration. To get the key, please follow steps from OpenAQ [here](https://docs.openaq.org/using-the-api/api-key)

3. **Run the containers**

We have one docker compose file to build and run 3 containers

- postgrex-mono: the db of the monorepo
- mapapi-mono: the backend
- website-mono: the website frontend

To spin them up run from the root of this git repo:

```bash
docker compose --env-file apps/api/.env.development -f docker-compose-dev.yml up
```

This automatically builds and starts the necessary containers. When developing and changing source files, the api service automatically reloads the source files. Use the `--build` option when you change npm dependencies and need to rebuild the image. Optionally use the `-d` option for running detached in the background.

To stop the services, run:

```sh
docker compose --env-file  apps/api/.env.development -f docker-compose-dev.yml down
```

4. **Seed Data to the Database**

- Download database dump from [here](https://drive.google.com/drive/folders/1DU66VaaAoA4704MBNQtk9irZ0QVrO1kO?usp=sharing)
- Copy db dump to db container

```bash
docker cp agmap.dump postgrex-mono:/tmp/
```

- Restore database

```bash
docker exec -it postgrex-mono pg_restore -U postgres -d agmap -v /tmp/agmap.dump
```

- Make sure database ready

```bash
docker exec -it postgrex-mono psql -U postgres -d agmap -c "select count(*) from location;"
```

Expected Result

```bash
 count
-------
  9215
(1 row)
```

5. **Check the UI**

The application is running on `http://localhost:3000/` and calls http://localhost:3001/ for the backend for data you should see the map with the data showing up. 

Please note that the compile log shows running on `http://0.0.0.0:3000/` but this will cause CORS issues. So make sure you run on `http://localhost:3000/`.
