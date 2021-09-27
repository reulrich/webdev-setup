# Entwicklungs-Setup für RuMeDe-Webprojekte

<a name="localdev"></a>
## Lokale Entwicklung

### Verwendung
 - `$ npm install`
 - `$ npm install gulp` (run `$ npm config set prefix /usr/local` if gulp isn't installed globally but in your `~`)
 - run `$ gulp serve`
 
#### Inhalt
 - Gulp
 - Browsersync
 - Sass Compiler
 - CSS minifyer

#### Dependencies
 - Node.js
 - npm
 - gulp: ^4.0.2

#### devDependencies
 - Node.js
 - npm
 - browser-sync: ^2.26.7
 - gulp: ^4.0.2
 - gulp-sass: ^4.1.0
 - node-sass: ^4.14.1
 - gulp-clean-css: ^4.3.0

## Dokumentation
* Erstellen einer package.json-Datei: [docs.npmjs.com](https://docs.npmjs.com/creating-a-package-json-file)
* Angabe von Abhängigkeiten (Dependencies) in einer package.json-Datei: [docs.npmjs.com](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)