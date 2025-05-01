#!/bin/sh

# This script is used to start the application.

echo "Starting application..."

# Check if Prisma commands have already been executed
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

  # Create a marker file to indicate that Prisma commands have been executed
  # touch /app/.prisma_initialized
else
  echo "Squelize initialization already done, skipping..."
fi
