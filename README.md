## Prueba Tecnica - QCODE

- Julian Baena

### Lenguaje y Framework

- Javascript y NodeJS con Express

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![GIT](https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 

### Requisitos previos

Necesitará las siguientes cosas correctamente instaladas en su computadora.

- [Nodejs](https://nodejs.org/en)
- [Git](http://git-scm.com/)

### Instalación

- Clonar repositorio
  - `git clone https://github.com/baenat/prueba-QCODE.git`
- Ingresar a carpeta
  - `prueba_QCODE`
- Metodo
  - `getSpacesAvailable`

### Instalar dependencias

```
npm install
```

### Ejecutar entorno de desarrollo

```
npm run start
```

### Como usar

Servicio recibe la mediante url el dia de la semana



API

```
http://localhost:3000/api/spacesAvailable?day=jueves
```

```json
GET:

RESPONSE CODE: 200

{
	"day": "JUEVES",
	"spacesAvailable": 8,
	"message": "Total de espacios disponibles para el (JUEVES) son: 8"
}
```

```
http://localhost:3000/api/spacesAvailable?day=name
```
```json
GET:

RESPONDE CODE 400

{
	"message": "No es un dia de la semana válido"
}

```