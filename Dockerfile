# download an image from dockerhub(library) 
FROM node:18.15.0

# CD to directory /usr/app
WORKDIR /usr/app

# Copy application to image
COPY ./ ./

# The RUN instruction will execute any commands in a new layer on top of the current image and commit the results.
RUN npm install

ENTRYPOINT [ "npm", "run", "serve"]

