# FROM node:14-alpine
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "start"]

#================================
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]