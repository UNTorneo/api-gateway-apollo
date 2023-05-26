

Build:
docker build -t api-gateway-apollo .

Correr:
docker run -p 3001:4000 api-gateway-apollo

Deploy

docker tag api-gateway-apollo jmorenoh/api-gateway-apollo:2.16
docker push jmorenoh/api-gateway-apollo:2.16