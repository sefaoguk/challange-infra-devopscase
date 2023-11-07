#!/bin/bash

FOLDER=$(dirname "$(readlink -f "$0")")
source $FOLDER/.env

docker exec $(docker ps --format '{{.Names}}'| grep ${PROJECT_NAME}_mysql_masterdb) /usr/bin/mysqldump -u root --password=${PROJECT_DB_ROOT_PASSWORD} --all-databases > ${PROJECT_PATH}/${PROJECT_NAME}/src/BACKUP/online
# Backup alinmasi icin database containeri durdurulur. Istek alinmayarak database de islem yapilmamasi saglanir.
docker stop ${PROJECT_NAME}'_mysql_masterdb'

# Backup'in alindigi an, gun/ay/yil/dakika/saniye seklinde degiskende tutulur.
DATE=$(date +'%d%m%Y_%H%M')

# Backup icin mysql containerinin bagli oldugu database dosyasinin backup'i alinir.
sudo tar -czpvf ${PROJECT_PATH}/${PROJECT_NAME}/src/BACKUP/offline'masterdb_backup'$DATE'.tar.gz' ${PROJECT_PATH}/${PROJECT_NAME}/src/mysql/masterdb/data

# Database tekrar calistirilarak uygulama kullanilabilir hale getirilir.
docker start ${PROJECT_NAME}'_mysql_masterdb'
