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
  FROM node:lts-alpine

  # install simple http server for serving static content
  RUN npm install -g http-server

  # make the 'app' folder the current working directory
  WORKDIR /app

  # copy both 'package.json' and 'package-lock.json' (if available)
  COPY package*.json ./

  # install project dependencies
  RUN npm install

  # copy project files and folders to the current working directory (i.e. 'app' folder)
  COPY . .

  # build app for production with minification
  RUN npm run build

  EXPOSE 8080
  CMD [ "http-server", "dist" ]
```


### Build container
```
docker build -t vuejs-cookbook/dockerize-vuejs-app .
```

### Run container
```
docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
