import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { dbHOST, dbPassword, dbPort, dbUser } = configService.postgres;
        return {
          type: 'postgres',
          host: dbHOST,
          port: dbPort,
          username: dbUser,
          password: dbPassword,

          // synchronize: true, // esto debe estar en false en producion
          autoLoadEntities: true,
        };
      },
    }),
  ],
  providers: [
    // {
    //   provide: 'PG',
    //   useFactory: (configService: ConfigType<typeof config>) => {
    //     const { dbHOST, dbName, dbPassword, dbPort, dbUser } =
    //       configService.postgres;
    //     const client = new Client({
    //       user: dbUser,
    //       host: dbHOST,
    //       password: dbPassword,
    //       database: dbName,
    //       port: dbPort,
    //     });
    //     client.connect();
    //     return client;
    //   },
    //   inject: [config.KEY],
    // },
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
