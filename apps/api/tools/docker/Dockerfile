# TODO: Add multistage
FROM node:23
WORKDIR /app

# Install deps and copy project to container
COPY package*.json ./
RUN npm install
COPY . .

# First build and run with dev tag
## TODO: prod options to run
RUN npm run build