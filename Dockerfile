FROM node:current-alpine3.17

WORKDIR /data
VOLUME /data
RUN npm install --save-dev @faker-js/faker
RUN npm install -g json-server
ADD load_data.js /data/load_data.js
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
EXPOSE 8999
ENTRYPOINT ["/entrypoint.sh"]