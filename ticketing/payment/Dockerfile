FROM node:16 as development

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install webpack

COPY . .

RUN npm run build

CMD ["npm", "start"]