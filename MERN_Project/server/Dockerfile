FROM node:24.6.0

WORKDIR /MERN_Project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "run", "server"]