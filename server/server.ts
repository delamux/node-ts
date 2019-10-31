import app from './app';
import colors from 'colors';

colors.enable();
// use this line to get port from environment variable
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  // @ts-ignore
  let port = PORT.toString();
  console.log("Listening on port: " + port.cyan);
});