FROM node:alpine

EXPOSE 3003

WORKDIR /usr/src/app

COPY . .

RUN npm install

USER node

CMD npm start