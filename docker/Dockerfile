FROM node:lts-alpine as base

USER root
# Update image
RUN apk update && apk upgrade --available && apk add --no-cache g++ make python3

COPY . /app
WORKDIR /app

#############################
# Install NPM packages so we can ditch caches
FROM base as builder

# Install everything
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn \
  yarn install --immutable

#############################
# Runner without caches
FROM base as runner

# add non root user
RUN addgroup -S garax && \
  adduser -S -G garax garax

WORKDIR /app

# Argument to select the env file
ARG ENV_FILE=.env

# Copy the env file
COPY ${ENV_FILE} .env

#grab previously installed modules without caches. 
COPY --from=builder /app/node_modules ./node_modules
RUN chown -R garax:garax /app

USER garax

EXPOSE 3000

# Permissions for clients-entrypoint
RUN chmod +x ./docker/clients-entrypoint.sh

# Permission for admin-entrypoint
RUN chmod +x ./docker/admin-entrypoint.sh

# Permission for server-entrypoint
RUN chmod +x ./docker/server-entrypoint.sh