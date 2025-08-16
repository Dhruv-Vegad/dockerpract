FROM node:24.6.0

WORKDIR /MERN_Project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "server"]