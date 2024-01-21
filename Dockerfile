FROM node:alpine

RUN apk --no-cache add git

WORKDIR /usr/src/personas-app

COPY . /usr/src/personas-app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]