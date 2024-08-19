# Kafka Logging System

## Overview

This repository demonstrates a distributed logging system using Kafka. 
The project involves multiple Node.js servers (`loginServer`, `profileServer`, `settingsServer`) that 
generate event logs, which are collected via Kafka and displayed in real-time using a web(html).

## Features

- **Distributed Log Generation**: Each server generates logs for login, profile updates, and settings changes.
- **Kafka for Log Transmission**: Logs are sent to a Kafka broker using Kafka producers from each server.
- **Real-Time Log Monitoring**: Logs can be monitored in real-time via a web UI using WebSocket.
- **Docker Support**: Easily deploy Kafka and Zookeeper using Docker.

## How to start
- Turn on Docker on your desktop
- yarn or npm install
- yarn start or npm start
- And waiting for few seconds
