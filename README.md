# Entwicklungs-Setup für RuMeDe-Webprojekte

## Erstellen des Starterkits (Default-Setting)

### Vorgehen
1. Eingabeaufforderung öffen
1. Zum Stammverzeichnis des Paketes navigieren mit `cd pfad/zum/paket`
1. Erstellen der package.json-Datei durch Ausführen des Befehls `npm init --yes`
1. Hizufügen der Abhängigkeiten
    1. "dependencies" hinzufügen mit dem Befehl `npm install <package-name> --save-prod`
    1. "devDependencies" hinzufügen mit dem Befehl `npm install <package-name> --save-dev`
1. package.json-Datei öffnen und die Standardwerte wie gewünscht anpassen
    1. "Description hinzufügen": `Gewünschte Beschreibung eingeben`
    1. "Main" ändern in: `gulpfile.js`
    1. "Autor" ändern in: `Reto Ulrich <info@rumede.ch>`
    1. "License" ändern in: `MIT`

<a name="localdev"></a>
## Lokale Entwicklung

### Verwendung
 - `$ npm install`
 - `$ sudo npm install gulp -g` (run `$ npm config set prefix /usr/local` if gulp isn't installed globally but in your `~`)
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