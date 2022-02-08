FROM nginx:latest

# Copy all files in src folder to docker container
COPY website/ /usr/share/nginx/html

# Switch workdir
WORKDIR /usr/src/app