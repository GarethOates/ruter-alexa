FROM node:alpine

COPY . /var/node

WORKDIR /var/node

RUN npm install

ENTRYPOINT  ["npm", "start"]
