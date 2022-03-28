import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { AppController } from './app.controller';
import { AppService, TypeOrmConfigService } from './app.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService    
    }), UsersModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
