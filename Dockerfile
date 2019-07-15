# Build app
FROM node:10.16.0-alpine AS build

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.8

COPY . /app

RUN ng build --prod --output-path=dist


# Run NGINX Server with app
FROM nginx:1.17.1-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
