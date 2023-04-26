FROM node:18-alpine
WORKDIR /api-gateway-apollo
COPY package.json package.json
RUN npm install

COPY . .

CMD ["npm", "start"]
