FROM node

WORKDIR /usr/ceshi

COPY . .

RUN npm install
RUN npm install pm2 -g

ENV xiaoben xiaobenEnv

CMD [ "node", "server.js" ]
