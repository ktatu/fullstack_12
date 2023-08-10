FROM node:alpine as build-stage

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=/api

COPY . .

RUN npm ci

RUN CI=true npm test

RUN REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL} npm run build

FROM node:alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/build ./build

RUN npm install --global serve

CMD serve build