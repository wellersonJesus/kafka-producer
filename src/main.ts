import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5020;

  await app.listen(5020, () =>
    console.log("💣💣💣 API Server Data-Process-Producer running")
  );
}
bootstrap();
