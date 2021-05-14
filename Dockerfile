FROM node:14

WORKDIR /user/src/app

COPY . .

RUN npm install

RUN npm build

EXPOSE 8080

CMD ["npm", "start"] 
