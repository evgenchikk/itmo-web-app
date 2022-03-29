import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );


  const hbs = require('hbs');
  
  // var parse = require('pg-connection-string').parse;
  // console.log(process.env.DATABASE_URL);
  // var config = parse(process.env.DATABASE_URL);
  // console.log(Object.keys(config));

  // const { Client } = require('pg');
  // const client = new Client({
  //   connectionString: '...',
  //   ssl: {
  //     rejectUnauthorized: false
  //   }
  // });
  // client.connect();
  // client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  //   if (err) throw err;
  //   for (let row of res.rows) {
  //     console.log(JSON.stringify(row));
  //   }
  //   client.end();
  // });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views/partials'))
  await app.listen(process.env.PORT == undefined ? 3000 : process.env.PORT);
}
bootstrap();