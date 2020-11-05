FROM node

# Create app directory
WORKDIR /usr/src/xiaoben
# Bundle app source
COPY . .

RUN npm install

RUN npm install pm2 -g

CMD ["sh","shellceshi.sh"]
