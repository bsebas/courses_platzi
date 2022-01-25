import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private key: string,
    @Inject('TASKS') private taks,
  ) {}
  getHello(): string {
    console.log(this.taks);
    return `API KEY = ${this.key}`;
  }
}
