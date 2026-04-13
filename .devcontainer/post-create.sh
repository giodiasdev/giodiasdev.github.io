#! /usr/bin/env bash

# Node.js setup
pnpm self-update
if [ -f "pnpm-lock.yaml" ]; then
    pnpm install --frozen-lockfile
elif [ -f "package.json" ]; then
    pnpm install
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ] && [ -f ".env.example" ]; then
    cp .env.example .env
fi
