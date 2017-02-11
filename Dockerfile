FROM node:alpine

MAINTAINER Gareth Oates

COPY . /var/node

WORKDIR /var/node

RUN npm install

ENTRYPOINT  ["npm", "start"]
