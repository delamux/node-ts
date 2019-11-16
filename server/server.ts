import app from './app';
import colors from 'colors';
import MongoHandler from './config/db/mongodb';

colors.enable();
const portNumber = process.env.PORT || 3000 ;

app.listen(portNumber, () => {
  // @ts-ignore
  new MongoHandler();
  const port = portNumber.toString();
  console.log('The server is running on port: ' + port.cyan + ' Online'.green);
});