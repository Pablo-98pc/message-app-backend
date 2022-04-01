FROM node:17
RUN mkdir /src
WORKDIR /src
ADD ./src /src

RUN npm install
EXPOSE 3001
CMD [ "node", "index.js" ]