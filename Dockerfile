# develop stage
FROM node:alpine as develop-stage
WORKDIR /app
COPY ./ /app

# build stage
FROM develop-stage as build-stage
RUN npm install
RUN npm run build

# production stage
FROM nginx:alpine as production-stage
COPY ./ ./app
EXPOSE 80
CMD npm run serve
