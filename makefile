# Makefile for managing Docker operations

# Customize these variables according to your Docker setup
IMAGE_NAME=lynkora-single-page
CONTAINER_NAME=lynkora-single-page
NETWORK_NAME=lynkora
HOST_PORT=3000
CONTAINER_PORT=80

# Build the Docker image
build: 
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run:
	docker run -d --name $(CONTAINER_NAME) --network $(NETWORK_NAME) -p $(HOST_PORT):$(CONTAINER_PORT) $(IMAGE_NAME)

# Stop the Docker container
stop:
	docker stop $(CONTAINER_NAME)

# Remove the Docker container
rm:
	docker rm $(CONTAINER_NAME)

# Remove the Docker image
rmi:
	docker rmi $(IMAGE_NAME)

# Shortcut to stop and remove the container
stop-rm: stop rm

# List running containers
ps:
	docker ps

# List logs
logs:
	docker logs -f $(CONTAINER_NAME)

.PHONY: build run stop rm rmi stop-rm ps logs
