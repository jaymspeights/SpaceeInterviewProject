# Spacee Interview Application
This is the application is per (mostly) the basic requirements. It is a web server which on startup read from dates.txt from the local filesystem, parses a list of dates contained in the file, fetches data from the NASA Mars Rover Photos API, and saves it to the local filesystem. Afterwards, it begins responding to HTTP GET requests on the path /api/photos?date=\<earth-date\>. The server will look to the downloaded files for the corresponding date photos. If found, it will return them. Otherwise, it will fetch the new photos from the api, save them and then return to the client.

### Build

After downloading the source code, from the root directory:

`npm install`

`npm run build`

### Run

`npm start`

## The future of Spacee Interview Application

I plan on adding a front end for viewing the pictures and deploying it to Azure Cloud (AKS most likely). This work is estimated to be compled by 5/14/2021

## Contribution Guidelines

Please do not contribute to this repository. This is not a real project haha