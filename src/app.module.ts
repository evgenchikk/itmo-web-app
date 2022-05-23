import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { PasswordsModule } from './passwords/passwords.module';
import { AppController } from './app.controller';
import { AppService, TypeOrmConfigService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WsModule } from './ws/ws.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule.forRoot({
      connectionURI: process.env.SuperTokensConnectionURI,
      apiKey: process.env.SuperTokensAPIKey,
      appInfo: {
        appName: "my-backend-project",
        apiDomain: "https://evgeny-backend-itmo.herokuapp.com",
        websiteDomain: "https://evgeny-backend-itmo.herokuapp.com",
        apiBasePath: "/auth",
        // websiteBasePath: "/auth/*",
      },
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService    
    }), UsersModule, CommentsModule, PasswordsModule, WsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
