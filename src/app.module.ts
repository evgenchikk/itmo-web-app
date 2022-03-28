import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'ec2-52-212-228-71.eu-west-1.compute.amazonaws.com',
  //     port: 5432,
  //     username: 'olvcokibhopyhg',
  //     password: '9b022e704563ff04340071260efbe27b9b00b9aeadf8daa71b0c44a731c24007',
  //     database: 'dmlcspum8g9su',
  //     entities: [],
  //     synchronize: true,
  //     ssl: {
  //       rejectUnauthorized: false
  //     }
  //   }
  // )],
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
