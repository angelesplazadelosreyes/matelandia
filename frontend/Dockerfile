# Imagen base de Node.js
FROM node:18-alpine

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias globales de Vue CLI
RUN npm install -g @vue/cli

# Exponer el puerto de desarrollo
EXPOSE 8080

# Comando por defecto
CMD ["npm", "run", "serve"]
