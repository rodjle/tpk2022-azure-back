FROM node:14
WORKDIR /usr/scr/app
COPY package*.json *.js  ./
RUN npm install
EXPOSE 3000
CMD [ "npm","start" ]