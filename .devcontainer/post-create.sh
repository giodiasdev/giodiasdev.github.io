#! /usr/bin/env bash

# Args
WORKSPACE_DIR=${1:-"."}

# Go to workspace
cd $WORKSPACE_DIR

# Node.js setup
npm install -g npm@latest
if [ -f "package-lock.json" ]; then
    npm ci
elif [ -f "package.json" ]; then
    npm install
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    cp .env.example .env
fi
