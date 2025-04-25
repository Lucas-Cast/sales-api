import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sequelize from '../sequelize';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await sequelize.authenticate()
  await sequelize.sync()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
