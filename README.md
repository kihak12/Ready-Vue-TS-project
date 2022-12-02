# empty-vue-ts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### DockerFile
```
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
```


### Build container
```
sudo docker build . --file Dockerfile --tag my-image-name
```

### Run container
```
docker run -it -p 8080:80 --rm --name my-image-name-1 my-image-name
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
