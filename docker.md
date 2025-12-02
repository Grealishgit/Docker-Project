<!-- To build  -->
docker build -t react-docker .

<!-- To run  -->
docker run react-docker 

<!-- To run with port mapping -->
docker run -p 5173:5173 react-docker

<!-- Add --host to vite in package.json -->
"dev": "vite --host",

<!-- Docker listing containers -->
docker ps

<!-- Docker listing all containers, including stopped ones -->
docker ps -a

<!-- Docker stop a container -->
docker stop <container_id>

<!-- Removing all stopped containers -->
docker container prune