FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV PORT=3001
EXPOSE 3001

CMD ["sh", "-c", "node ./utils/wait-for-db.js && node ./bin/www"]
