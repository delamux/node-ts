import { MongoClient } from 'mongodb';

export class MongoHandler {
  public static client: MongoClient;

  constructor() {
    MongoClient.connect(
      'mongodb://localhost:27017/nodets',
      {useUnifiedTopology: true,  useNewUrlParser: true},
      (err) => {
        if (err) throw err;
        console.log('MongoDB '.yellow + 'Online'.green)
      });
  }

  public disconnect(): void {
    MongoHandler.client.close();
  }
}

export default MongoHandler;