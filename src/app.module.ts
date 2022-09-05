import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AppController} from "./app.controller";

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.clientId_account,
            brokers: [process.env.brokers],
          },
          consumer: {
            groupId: process.env.groupId_account,
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
  ],
})
export class AppModule {}
