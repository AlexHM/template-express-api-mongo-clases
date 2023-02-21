import mongoose from 'mongoose';
import config from '../config/enviroments/enviromentIndexer';

export class Database {
  async connect() {
    const selectedUri: string = this._selectUriByEnviroment();

    this._restricQuery();
    this._verifyToActiveDebbug();

    await mongoose.connect(selectedUri).then(() => {
      console.log(`Database: ${selectedUri}`);
    });
  }

  private _selectUriByEnviroment() {
    return config.mongo.uri;
  }

  private _verifyToActiveDebbug() {
    mongoose.set('debug', config.mongo.debug);
  }

  private _restricQuery() {
    mongoose.set('strictQuery', false);
  }
}
