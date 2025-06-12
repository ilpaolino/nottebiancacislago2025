FROM nginx:stable-alpine

# Copia i file generati da Nuxt
COPY .output/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
