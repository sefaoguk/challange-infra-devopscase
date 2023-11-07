FROM php:7.4-fpm

#RUN apt-get update && apt-get upgrade -y && apt-get install curl && apt-get install tar 
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli 

WORKDIR /var/www/html/wordpress
COPY . .
#RUN curl -O https://wordpress.org/latest.tar.gz && \
#    tar -xzf latest.tar.gz --strip-components=1 && \
#    rm latest.tar.gz && \
#    chown -R www-data:www-data .


EXPOSE 9000
