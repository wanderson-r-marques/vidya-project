FROM node:alpine
WORKDIR '/frontend'
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json .
RUN npm i
COPY . .
CMD ["npm", "run", "dev"]