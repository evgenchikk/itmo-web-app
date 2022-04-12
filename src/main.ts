import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const hbs = require('hbs');
  
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  const config = new DocumentBuilder()
    .setTitle('Project documentation')
    .setDescription('The project\'s API description')
    .setVersion('0.0.1')
    .build();
  const documentation = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentation);

  await app.listen(process.env.PORT == undefined ? 3000 : process.env.PORT);
}
bootstrap();