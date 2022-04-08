FROM node:17.8.0
RUN mkdir /src
WORKDIR /src
ADD . /src
RUN npm install
EXPOSE 3001
CMD node index.js

