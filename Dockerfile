FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app

#ADD . /app
COPY public /app/public
COPY src /app/src
COPY package.json /app/
COPY tsconfig.json /app/

#COPY . /app

#RUN #npm install -g yarn
#    yarn && \
#    yarn run build && \
#    yarn cache clean
RUN yarn install

RUN npm run build
RUN yarn global add serve

CMD ["serve", "-s", "build"]
EXPOSE 8080
