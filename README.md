# Microservicios Básicos. #
Implementación de un Blog Básico con Publicaciones y Comentarios con fines demostrativos 
del funcionamiento de Deployments, Services y Pods de Kubernetes.

Todos los datos producidos en la app se almacenan en memoria. Al reiniciar cada microservicio, sus datos se perderán 

Cada directorio contiene la app correspondiente a un microservicio.

La creación de comentarios tiene un proceso de validación. Los comentarios con la palabra **orange** son rechazados.

Este proyecto ha sido desarrollado en **Ubuntu 22.04**

## Tecnologías Utilizadas ##
| BackEnd | FrontEnd | CI/CD |
| --- | --- | --- |
| NodeJS  | React | Skaffold |

# Requisitos
1. Docker instalado.
2. Kubernets. En este proyecto se utilizó minikube (https://minikube.sigs.k8s.io/docs/start/).
3. Crear un ingress controller en kubernets. En este proyecto se utilizó ingress-inginx en minikube (https://kubernetes.github.io/ingress-nginx/deploy/#minikube) ![Working Image](/assets/ingress.png)
4. Skaffold. Skaffold es opcional, pero facilita el despliegue en modo desarrollo con 1 solo comando. Si prefieres, puedes crear cada deployment manualmente. (https://skaffold.dev/docs/install/)

## Instalación ##
Clona el repositorio
```
git clone https://github.com/edssn/node-microservices-basic 
```

Entra en el directorio 
```
cd node-microservices-basic 
```

Inicia todo el projecto con skaffold
```
skaffold dev
```

![Deploying image](/assets/deploy.gif)

## Funcionamiento ##
![Working Image](/assets/use.gif)


## Créditos ##
Este proyecto es el resultado de un capítulo del Curso [Microservices with Node JS and React](https://www.udemy.com/course/microservices-with-node-js-and-react) en Udemy. 