# Dockerfile for Next.js Edge-Aware Multi-Tenant Analytics Dashboard
FROM node:18-alpine as base
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --omit=dev
COPY . .

RUN npm run build

FROM node:18-alpine as production
WORKDIR /app
COPY --from=base /app .
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "npm", "start" ]
