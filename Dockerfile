FROM node:18-alpine3.18 as builder

WORKDIR "/app"

COPY package.json package-lock.json deploy ./

RUN npm i -g @angular/cli@16; \
    npm install

COPY . .

RUN npm run build-prod

FROM nginx

COPY --from=builder /app/deploy/nginx/conf.d /etc/nginx/conf.d
COPY --from=builder /app/dist/nepeinann /usr/share/nginx/html

RUN nginx -t
