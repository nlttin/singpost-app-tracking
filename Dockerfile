FROM node:22-alpine as base

RUN apk update && apk upgrade && apk add --no-cache dumb-init

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY src/ ./src/

EXPOSE 3000

CMD ["dumb-init", "node", "src/index.js"]
