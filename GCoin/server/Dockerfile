FROM node:8.7.0-alpine
RUN mkdir -p /GCoin/server
WORKDIR /GCoin/server
COPY package.json /GCoin/server
COPY package-lock.json /GCoin/server
RUN npm install
COPY . /GCoin/server
CMD [ "node", "server"]
