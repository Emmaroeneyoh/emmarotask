# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application code to the container
COPY . .

RUN npm install

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "index.js"]
