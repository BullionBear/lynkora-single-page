# Stage 1: Build the React application
FROM node:14 AS build

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Copy your custom nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose both port 80 and 443
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
