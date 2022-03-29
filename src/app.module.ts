import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './models/users/users.module';
import { CommentsModule } from './models/comments/comments.module';
import { PasswordsModule } from './models/passwords/passwords.module';
import { AppController } from './app.controller';
import { AppService, TypeOrmConfigService } from './app.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService    
    }), UsersModule, CommentsModule, PasswordsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
