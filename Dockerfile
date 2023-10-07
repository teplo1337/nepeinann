FROM node:18-alpine3.18 as builder

WORKDIR "/app"

COPY package.json package-lock.json ./

RUN npm i -g @angular/cli@16; \
    npm install

COPY . .

RUN npm run build-prod

FROM nginx

WORKDIR /usr/share/nginx/html
COPY --from=builder ./deploy/nginx/conf.d /etc/nginx/conf.d
COPY --from=builder ./app/dist/nepeinann .

RUN nginx -t
