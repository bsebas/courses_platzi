import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configEnv: ConfigType<typeof config>, // @Inject('PG') private client: Client,
  ) {}
  getHello(): string {
    return `fasf`;
  }

  getTaks() {
    //   return new Promise((resolve, reject) => {
    //     this.client.query('SELECT * FROM task', (err, res) => {
    //       if (err) reject(err);
    //       resolve(res);
    //     });
    //   });
    return '';
  }
}
