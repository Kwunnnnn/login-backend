import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(compression());

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Authen example')
    .setDescription('Authen API description')
    .setVersion('1.0')
    .addTag('Authen')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configuration().port);
  console.log('Port---->', configuration().port);
}
bootstrap();
