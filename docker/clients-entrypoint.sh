#!/bin/sh

# This script is used to start the Client.
if [ ! -d "/app/dist" ]; then
  echo "Building client..."
  yarn build:c
  echo "Client build completed."

else
  echo "Client build already done, skipping..."
fi