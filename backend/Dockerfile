FROM node:alpine
WORKDIR usr/app
COPY package*.json ./

EXPOSE 3306
ENV PORT 3306
ENV HOST "34.95.237.156"

RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start:prod"]
