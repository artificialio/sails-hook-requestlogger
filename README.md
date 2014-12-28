# sails-hook-traceur

[Sails JS](http://sailsjs.org) hook to activate [morgan](https://github.com/expressjs/morgan) request logging for yoursails app.

### Installation

`npm install sails-hook-requestLogger`

### Usage

Just lift your app as normal, and enjoy the future of Javascript today. To see what is possible, see: https://github.com/google/traceur-compiler/wiki/LanguageFeatures

### Configuration

By default, configuration lives in `sails.config.requestlogger`.

Parameter      | Type                | Details
-------------- | ------------------- |:---------------------------------
format        | ((string)) | Defines which logging [format](https://github.com/expressjs/morgan#predefined-formats) to use. Deaults to `dev`.
inDevelopment | ((boolean)) | Whether or not to log requests in development environment.  Defaults to `true`.
inProduction  | ((boolean)) | Whether or not to log requests in production environment  Defaults to `false`.

That&rsquo;s it!