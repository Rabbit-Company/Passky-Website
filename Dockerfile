FROM nginx:alpine

# Copy all files in website folder to docker container
COPY website/ /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf