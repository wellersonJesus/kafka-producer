import { OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
export declare class AppController implements OnModuleInit {
    private producer;
    constructor(producer: ClientKafka);
    onModuleInit(): Promise<void>;
    newAccount(body: any, request: any): import("rxjs").Observable<any>;
}
