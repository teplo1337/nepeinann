FROM node:18-alpine3.18 as builder
RUN mkdir /app
WORKDIR "/app"

COPY package.json package-lock.json deploy ./

RUN npm i -g @angular/cli@16; \
    npm install

COPY . .
RUN ls -l
RUN npm run build-prod
RUN ls -l
RUN ls -l /app/deploy/nginx/conf.d
RUN ls -l /app/dist/nepeinann

FROM nginx

RUN rm -f /usr/share/nginx/html/index.html /etc/nginx/conf.d/default.conf
COPY --from=builder /app/deploy/nginx/conf.d /etc/nginx/conf.d
COPY --from=builder /app/dist/nepeinann /usr/share/nginx/html

RUN nginx -t
