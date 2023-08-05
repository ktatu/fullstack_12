FROM node:alpine as build-stage

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=http://localhost:3001

COPY . .

RUN npm ci

RUN REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL} npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html