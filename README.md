# Crear proyecto con Webpack

<!-- 1.- Crear un proyecto con nodeJS -->
npm init -y       // el comando -y espara tener algunas configuraciones por defecto.

<!-- 2.- Instalando webpack -->
npm i webpack     // solo para este proyecto.

<!-- 3.- Install Webpack-cli -->
npm install webpack webpack-cli --save-dev

<!-- 5.- Corriendo Webpack -->
npx webpack ./src/app.js -o ./build/   // Convertir del archivo original a otro archivo js.

<!-- 6.- Archivos de origen -->
Crear SRC donde estaran los archivos de origen

<!-- 7.- Crear webpack.config.js -->
// No es nada mas que un Objeto de javascript
module.exports = {
    // Es la direccion de origen(Archivo principal de la app)
    entry: './src/app.js',
    // Archivo de salida
    output: {
        // __dirname (Es desde la ruta inicial)
        path: __dirname + '/build',
        filename: 'bundle.js'
    }
}

<!-- 8.- Ejecutar webpack en produccion o desarrollo -->
npx webpack        //Normal
npx webpack -p     //Produccion
npx webpack -d     //Desarrollo

<!-- 9.- Añadiendo complementos de webpack para el index.html y style.css sass, scss, etc -->
npm install --save-dev html-webpack-plugin

<!-- 10.- para q este corriendo constantemente -->
npm install webpack-dev-server --save-dev

<!-- 11.- instalar style loader Css -->
npm i style-loader css-loader

