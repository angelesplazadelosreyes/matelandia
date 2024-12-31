# Imagen base de Node.js
FROM node:18-slim

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Establecer el entorno en modo desarrollo
ENV NODE_ENV=development

# Copiar archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias locales (incluye axios) y globales de Vue CLI
RUN npm install && npm install -g @vue/cli

# Instalar curl utilizando apt-get en Debian
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto de desarrollo
EXPOSE 8080

# Comando por defecto para iniciar el servidor
CMD ["npm", "run", "serve"]
