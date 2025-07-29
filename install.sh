#!/bin/sh
set -e
if ! command -v docker >/dev/null 2>&1; then
  echo "[ERROR] Docker must be installed. Exiting." >&2
  exit 1
fi
if ! docker images | grep -q edge-aware-analytics-dashboard; then
  echo "[INFO] Building Docker image..."
  docker build -t edge-aware-analytics-dashboard .
else
  echo "[INFO] Docker image already exists: edge-aware-analytics-dashboard"
fi
if ! docker ps -a --format '{{.Names}}' | grep -q edge-aware-analytics-dashboard; then
  echo "[INFO] Creating and starting container..."
  docker run --rm -d --name edge-aware-analytics-dashboard -p 3000:3000 edge-aware-analytics-dashboard
else
  echo "[INFO] Container edge-aware-analytics-dashboard already created. Starting container..."
  docker start edge-aware-analytics-dashboard
fi
