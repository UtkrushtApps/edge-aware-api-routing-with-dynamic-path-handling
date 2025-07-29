#!/bin/sh
set -e
./install.sh
if docker ps | grep -q edge-aware-analytics-dashboard; then
  echo "[SUCCESS] Application is running in Docker on port 3000."
else
  echo "[ERROR] Failed to start edge-aware-analytics-dashboard container. Check Docker logs."
  exit 1
fi
