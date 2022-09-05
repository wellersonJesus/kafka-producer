import {
  Body,
  Controller,
  Inject,
  OnModuleInit,
  Post,
  Req,
} from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";

@Controller()
export class AppController implements OnModuleInit {
  constructor(@Inject("KAFKA_SERVICE") private producer: ClientKafka) {}

  async onModuleInit() {
    await this.producer.connect();
  }

  @Post()
  newAccount(@Body() body, @Req() request) {
    const infosNewAccount = { ...request.user, ...body };
    console.log(infosNewAccount);
    return this.producer.emit("create-account", body);
  }
}
