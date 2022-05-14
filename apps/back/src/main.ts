import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors({ origin: "*" });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix("api/v1");
  console.log("LET'S GOOOOOOOO");
  await app.listen(8080, "0.0.0.0");
}
bootstrap();
