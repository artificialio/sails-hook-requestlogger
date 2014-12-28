# sails-hook-requestlogger

*Note: Requires Sails.js version >=0.11.0-rc*

[Sails JS](http://sailsjs.org) hook to activate [morgan](https://github.com/expressjs/morgan) request logging for yoursails app.

### Installation

`npm install sails-hook-requestLogger`

### Usage

Just lift your app as normal, and all your server requests will be logged, with useful information, straight to your console.

### Configuration

By default, configuration lives in `sails.config.requestlogger`.

Parameter      | Type                | Details
-------------- | ------------------- |:---------------------------------
format        | ((string)) | Defines which logging [format](https://github.com/expressjs/morgan#predefined-formats) to use. Deaults to `dev`.
inDevelopment | ((boolean)) | Whether or not to log requests in development environment.  Defaults to `true`.
inProduction  | ((boolean)) | Whether or not to log requests in production environment  Defaults to `false`.

That&rsquo;s it!
