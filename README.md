# Microservicios Básicos. #
Implementación de un Blog Básico con Publicaciones y Comentarios con fines demostrativos 
del funcionamiento de Deployments, Services y Pods de Kubernetes.

Todos los datos producidos en la app se almacenan en memoria. Al reiniciar cada microservicio, sus datos se perderán 

Cada directorio contiene la app correspondiente a un microservicio.

La creación de comentarios tiene un proceso de validación. Los comentarios con la palabra 
orange son rechazados.

## Tecnologías Utilizadas ##
| BackEnd | FrontEnd |
| --- | --- |
| NodeJS  | React |

## Despliegue ##
![Deploying image](/assets/deploy.gif "MarineGEO logo")

## Funcionamiento ##
![Working Image](/assets/use.gif "MarineGEO logo")


## Instalación ##
1. Descarga o clona el proyecto
2. Ingresa a cada uno de los directorios del proyecto y ejecuta ```npm install```
3. Para correr cualquier app de node o la app de react, ejecuta el comando ```npm start```