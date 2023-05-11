FROM node:18.6.0-alpine3.15
ENV URL_MS_CLANS=
ENV URL_MS_SPORTS=
ENV URL_MS_TOURNAMENT_VENUE=
ENV URL_MS_TOURNAMENTS=
ENV URL_MS_USERS=
ENV URL_MS_CHATS=
WORKDIR /api-gateway-apollo
COPY package.json package.json
RUN npm install


COPY . .
EXPOSE $PORT
CMD ["npm", "start"]
