FROM node:14

WORKDIR /var/www/html/angular

COPY . .
RUN yarn install

EXPOSE 80
CMD [ "yarn", "start","--port","80","--host","0.0.0.0","--disable-host-check" ]
