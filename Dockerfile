FROM node:17-alpine

# Docker needs to be installed
# ref.: https://docs.docker.com/engine/install/ubuntu/ 

# Create app directory
WORKDIR /src

# Install app dependencies
COPY package*.json . 

# Dev packages are not installed if you have NODE_ENV=production.
RUN NODE_ENV=development npm install 

# Bundle app source
ADD . .

EXPOSE 8080

CMD ["npm" ,"start"]

# test if works
# sudo docker build -t vinicius77/webworker:1.0 .
# sudo docker run -p 5000:8000 vinicius77/webworker:1.0
# http://172.17.0.2:3000/
