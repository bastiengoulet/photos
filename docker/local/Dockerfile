FROM node:20.0.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN npm install -g @angular/cli
# RUN npm install --save-dev @angular-devkit/build-angular
RUN npm install

EXPOSE 4200

# not using an execution list here so we get shell variable substitution
CMD npm run start