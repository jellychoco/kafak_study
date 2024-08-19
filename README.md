## Overview

This repository demonstrates a distributed logging system using Kafka. The project involves multiple Node.js servers (`loginServer`, `profileServer`, `settingsServer`) that generate event logs. These logs are collected via Kafka and displayed in real-time using a web-based UI (HTML).

## Features

- **Distributed Log Generation**: Each server generates logs for login, profile updates, and settings changes.
- **Kafka for Log Transmission**: Logs are sent to a Kafka broker using Kafka producers from each server.
- **Real-Time Log Monitoring**: Logs can be monitored in real-time via a web UI using WebSocket.
- **Docker Support**: Easily deploy Kafka and Zookeeper using Docker.

## How to Start

1. **Ensure Docker is Running**:
   - Make sure Docker is turned on and running on your desktop.

2. **Install Dependencies**:
   - Move to Server folder with `cd server`
   - Run `yarn install` or `npm install` to install the necessary dependencies.

4. **Start the Project**:
   
   - Run `yarn start` or `npm start` to start all services.
   - Wait for a few seconds for everything to initialize.

5. **View Logs**:
   - The web-based UI will automatically open in your default browser. If not, manually navigate to `http://127.0.0.1:5500/Front/index.html` to view the logs in real-time.

