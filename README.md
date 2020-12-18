# microfront-webpack5-module-federation
This is a sample of microfrontends running with webpack5 and module federation.The applications are built using react.

To execute this sample, just type `yarn && yarn start`.

The application will serve on http://localhost:3001

This application is composed by 4 microapps, one of then is a shell app (that aggregate the others).

Each application will generate a bundle at /remoteEntry.js.
``` 
http://localhost:3001/remoteEntry.js
http://localhost:3002/remoteEntry.js
http://localhost:3003/remoteEntry.js
http://localhost:3004/remoteEntry.js
``` 
