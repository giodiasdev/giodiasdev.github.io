#! /usr/bin/env bash

# Node.js setup
npm install -g npm@latest
if [ -f "package-lock.json" ]; then
    npm ci
elif [ -f "package.json" ]; then
    npm install
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ] && [ -f ".env.example" ]; then
    cp .env.example .env
fi
