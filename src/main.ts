import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );


  const hbs = require('hbs');
  const connection_str = 'postgres://olvcokibhopyhg:9b022e704563ff04340071260efbe27b9b00b9aeadf8daa71b0c44a731c24007@ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/dmlcspum8g9su';
  
  var parse = require('pg-connection-string').parse;
  var config = parse(process.env.DATABASE_URL == undefined ? connection_str : process.env.DATABASE_URL);
  console.log(Object.keys(config));

  // const { Client } = require('pg');
  // const client = new Client({
  //   connectionString: 'postgres://olvcokibhopyhg:9b022e704563ff04340071260efbe27b9b00b9aeadf8daa71b0c44a731c24007@ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/dmlcspum8g9su',
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