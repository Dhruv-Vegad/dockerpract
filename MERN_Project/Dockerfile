FROM node:24.6.0

WORKDIR /MERN_Project

COPY package.json .

RUN npm install

RUN npm run server

EXPOSE 5173

ENTRYPOINT [ "npm", "run", "dev"]