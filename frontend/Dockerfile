FROM node:lts-alpine AS builder 

WORKDIR /app

COPY package.json .yarnrc.yml ./

COPY . .

RUN corepack enable

RUN yarn install

ARG VITE_API_URL

ENV VITE_API_URL=${VITE_API_URL}

RUN yarn build 

FROM nginx:latest AS production

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]