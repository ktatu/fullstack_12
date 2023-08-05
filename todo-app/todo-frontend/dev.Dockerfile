FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD REACT_APP_BACKEND_URL=localhost:3001 npm start