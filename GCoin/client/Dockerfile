FROM node:8.7.0-alpine
RUN mkdir -p /GCoin/client
WORKDIR /GCoin/client
COPY package.json /GCoin/client
COPY package-lock.json /GCoin/client
RUN npm install
COPY . /GCoin/client
CMD [ "npm", "start"]
