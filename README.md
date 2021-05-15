# Spacee Interview Project
A web app that lets you look at cool Mars Rover pictures.

The API exposes an angular web page at GET /

And also access to photos at GET /api/photos?date=\<earth-date\>

The photos come from the NASA Mars Rover API and are cached by the backnd server.

To see an example, the app is currently hosted in Azure [here](http://104.45.185.62:8080/).

### Build

Ensure that node version is >= 14

After downloading the source code, from the root directory:

`npm install`

`npm run build`

### Run

`npm start`

Server will start on port 8080 or whatever $PORT is set to

The web server should now be running. You can verify by navigating to localhost:8080 (or whatever port was set in the ENV) in a web browser.

## Contribution Guidelines

Please do not contribute to this repository. This is not a real project haha
