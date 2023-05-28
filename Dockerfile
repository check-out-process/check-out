# Specify the base image with Node.js version
FROM node:16.20

# # Set the working directory inside the container
WORKDIR /app

# Copy the application source code to the working directory
COPY . .

# # Install the dependencies
RUN npm i --legacy-peer-deps --no-update-notifier

# Start the Node.js application
CMD [ "npm", "start" ]