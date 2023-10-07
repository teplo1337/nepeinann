FROM node:16.18.1-alpine3.16 as builder

WORKDIR "/app"

COPY package.json package-lock.json ./

RUN npm i -g @angular/cli@16; \
    npm install

COPY . .

RUN npm run build-prod

FROM nginx

COPY --from=builder /app/dist/apps/nepeinann /usr/share/nginx/html

RUN nginx -t
