FROM node:20-alpine as builder

WORKDIR /app

ENV NEXT_PUBLIC_API_URL https://dracula.betterw8.com:10443

COPY . .

RUN yarn

RUN yarn build

FROM nginx:1.19-alpine

COPY --from=builder /app/out /usr/share/nginx/html

# SSL Config

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
