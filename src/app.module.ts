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


@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule.forRoot({
      // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: 'https://226bcb11d05511ec8a0e81e1e702a5c3-us-east-1.aws.supertokens.io:3572',
      apiKey: 'QrXNcng2M5uxrVLFdQJScfX9WKM8b9',
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: "my-backend-project",
        apiDomain: "http://localhost:3000",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth/api",
        websiteBasePath: "/auth/*",
      },
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService    
    }), UsersModule, CommentsModule, PasswordsModule], // AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
