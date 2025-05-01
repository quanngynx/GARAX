# ----------------------- base -----------------
FROM node:22-alpine AS base

USER root
# Update image
RUN apk update && apk upgrade --available && apk add --no-cache g++ make python3

COPY . /app
WORKDIR /app

# ----------------------- dependencies -----------------
FROM base AS deps
RUN npm install --only=development

# ------------------------ builder ---------------
FROM base AS builder
WORKDIR /app

# Argument to select the env file
ARG ENV_FILE=.env

# Copy the env file
COPY ${ENV_FILE} .env

COPY --from=deps /app/node_modules ./node_modules

RUN yarn build:s

# ------------------------ runner ---------------------
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/garax-server/dist ./
COPY ./yarn.lock .

# Only need MONGODB_URL in .env file
COPY .env .env

# RUN yarn install --frozen-lockfile
RUN yarn install --frozen-lockfile

ENV PORT=3000

EXPOSE 3000

CMD ["yarn start:s"]
