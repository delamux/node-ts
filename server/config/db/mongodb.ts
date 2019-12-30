import { MongoClient } from 'mongodb';

export class MongoHandler {
  public static client: MongoClient;

  constructor() {
    MongoClient.connect(
      'mongodb://localhost:27017/nodets',
      {useUnifiedTopology: true,  useNewUrlParser: true},
      (err) => {
        if (err) {
          const errorName = err.name;
          console.log(`${errorName.red}: An error occurred connecting to ${'MongoDB'.yellow}.`);
          throw err
        }
      });
  }

  public disconnect(): void {
    MongoHandler.client.close();
  }
}

export default MongoHandler;
