FROM node
WORKDIR /app
ADD . .
RUN npm i && npm run build
CMD ["npm", "start"]