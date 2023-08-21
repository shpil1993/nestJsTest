import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false, cors: true });
  app.enableCors({
    allowedHeaders: '*'
  });
  await app.listen(3000);
}
bootstrap();
