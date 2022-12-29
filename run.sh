#!/bin/bash
cd ./backend/laradock/
sudo docker compose up -d nginx mysql phpmyadmin workspace
cd ../../frontend/
npm run dev
