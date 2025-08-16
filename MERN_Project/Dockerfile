FROM node:24.6.0

WORKDIR /MERN_Project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev","--","--host","0.0.0.0"]