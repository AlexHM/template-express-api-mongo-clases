import development from './development';
import commonDictionary from '../dictionaries/common.dictionary';
import production from './production';
import integration from './integration';
import test from './testing';

class SelectEnviroment {
  public enviroment: Record<string, any>;
  constructor(enviroment: string | undefined) {
    this.enviroment = this._selectEnviroment(enviroment);
  }

  private _selectEnviroment(enviroment: string | undefined) {
    if (enviroment === commonDictionary.enviroments.DEVELOPMENT) return development;
    if (enviroment === commonDictionary.enviroments.PRODUCTION) return production;
    if (enviroment === commonDictionary.enviroments.INTEGRATION) return integration;
    if (enviroment === commonDictionary.enviroments.TEST) return test;
    throw new Error('Enviroment not found');
  }
}
export default new SelectEnviroment(process.env.NODE_ENV?.toString()).enviroment;
