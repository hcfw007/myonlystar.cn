FROM node:16-alpine

RUN apk --no-cache --virtual build-dependencies add git openssh

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT npm start