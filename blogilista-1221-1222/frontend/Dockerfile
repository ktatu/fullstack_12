FROM node:alpine as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

FROM node:alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/build ./build

RUN npm install --global serve

CMD serve build