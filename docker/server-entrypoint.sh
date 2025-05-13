#!/bin/sh

# This script is used to start the application.

echo "Starting application..."

if [ ! -f "/packages/garax-server/dist" ]; then
  echo "Running yarn db:migrate:fresh..."
  yarn db:migrate:fresh
  echo "yarn db:migrate:fresh completed."

  echo "Running yarn migrate:up..."
  yarn migrate:up
  echo "yarn migrate:up completed."

  echo "Running yarn seed:generate..."
  yarn seed:generate
  echo "yarn seed:generate completed."

  echo "Running yarn seed:run..."
  yarn seed:run
  echo "yarn seed:run completed."
else
  echo "Squelize initialization already done, skipping..."
fi
