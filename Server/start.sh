#!/bin/bash


if [ ! "$(docker-compose ps -q)" ]; then
  echo "Docker Compose services are not running. Starting services..."
  docker-compose up -d
else
  echo "Docker Compose services are already running."
fi


node logMainServer.js &
node script.js &

sleep 5

# Open the HTML file in the default browser
if which xdg-open > /dev/null
then
  xdg-open http://127.0.0.1:5500/Front/index.html
elif which gnome-open > /dev/null
then
  gnome-open http://127.0.0.1:5500/Front/index.html
elif which open > /dev/null
then
  open http://127.0.0.1:5500/Front/index.html
else
  echo "Could not detect the web browser to open the HTML file."
fi
