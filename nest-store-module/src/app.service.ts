import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private key: string,
    @Inject('TASKS') private taks,
    @Inject(config.KEY) private configEnv: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    // console.log(this.taks);
    // return `API KEY = ${this.key}`;
    return `${this.configEnv.apiKey} ${this.configEnv.database.name}`;
  }
}
