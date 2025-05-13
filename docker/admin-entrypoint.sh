#!/bin/sh

# This script is used to start the Admin.
if [ ! -d "/app/dist" ]; then
  echo "Building Admin..."
  yarn build:a
  echo "Admin build completed."

else
  echo "Admin build already done, skipping..."
fi