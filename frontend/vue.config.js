module.exports = {
  devServer: {
    hot: true, // Activa HMR
    liveReload: true, // Recarga completa si HMR no puede manejar un cambio
    client: {
      overlay: true, // Muestra errores en el navegador
      logging: "info", // Logs detallados
    },
    watchFiles: { // Configuración válida para monitorear cambios
      paths: ["src/**/*"], // Monitorea archivos en la carpeta 'src'
      options: {
        poll: 1000, // Verifica cambios cada 1 segundo
        aggregateTimeout: 300, // Agrupa eventos rápidamente para evitar sobrecarga
      },
    },
    compress: true, // Activa gzip
    headers: {
      "Access-Control-Allow-Origin": "*", // Permite accesos de todas las fuentes
    },
    host: "0.0.0.0", // Escucha en todas las interfaces
    port: 8080, // Puerto del servidor
  },
  transpileDependencies: [], // Configuración opcional si necesitas transpilación
};
