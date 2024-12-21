# Imagen base de Python
FROM python:3.13.1-slim

# Crear y establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalar dependencias del sistema para PostgreSQL y compilación
RUN apt-get update && apt-get install -y \
    libpq-dev gcc && \
    rm -rf /var/lib/apt/lists/*


# Copiar el archivo de dependencias
COPY requirements.txt /app/

# Actualizar pip e instalar dependencias
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Exponer el puerto del servidor de desarrollo de Django
EXPOSE 8000

# Comando por defecto para ejecutar el contenedor
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
