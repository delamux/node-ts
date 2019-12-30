import app from './app';
import colors from 'colors';
import MongoHandler from './config/db/mongodb';

colors.enable();
const portNumber = process.env.PORT || 3000;

const initServer = async () => {
  await new MongoHandler();
  await app.listen( portNumber );
};

initServer()
  .then( () => {
    const port = portNumber.toString();
    console.log( 'MongoDB '.yellow + 'Online'.green );
    console.log( 'The server is running on port: ' + port.cyan + ' Online'.green );
  } );
