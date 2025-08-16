FROM node:24.6.0

WORKDIR /MERN_Project

COPY package.json .

RUN npm install

EXPOSE 5173

ENTRYPOINT [ "npm", "run", "dev"]