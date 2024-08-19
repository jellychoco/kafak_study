#!/bin/bash


if [ ! "$(docker-compose ps -q)" ]; then
  echo "Docker Compose services are not running. Starting services..."
  docker-compose up -d
else
  echo "Docker Compose services are already running."
fi


node logMainServer.js &
node script.js &
