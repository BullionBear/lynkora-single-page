# Stage 1: Build the React application
FROM node:20 AS build

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the Docker container
COPY package*.json /app/

# Install dependencies in the Docker container
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . /app

# Build the application
RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
