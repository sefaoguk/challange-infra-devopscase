FROM nginx:1-alpine

# Copy web content
WORKDIR /var/www/html/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY . .


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


