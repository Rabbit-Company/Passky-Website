FROM nginx:latest

# Copy all files in website folder to docker container
COPY website/ /usr/share/nginx/html