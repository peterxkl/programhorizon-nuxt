FROM node:8.11.4

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app

RUN npm install
RUN npm run build
EXPOSE 8082

CMD ["npm", "run", "dev"]
