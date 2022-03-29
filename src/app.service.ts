import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { User } from './models/users/user.entity';
// import { Comment } from './models/comments/comment.entity';
// import { Password } from './models/passwords/password.entity';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  };
}


@Injectable()
export class ServerResponseTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<{ serverResponseTime: Number }> { //| Promise<Observable<{ serverResponseTime: Number }>> {
    const time = Date.now();
    return next
      .handle()
      .pipe(map( () => ({ 
        serverResponseTime: Date.now() - time
      })));
  }
}


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    var config = require('pg-connection-string').parse(process.env.DATABASE_URL);
    return {
        type: 'postgres',
        host: config.host,
        port: config.port,
        username: config.user,
        password: config.password,
        database: config.database,
        // entities: ['dist/**/*.entity{ .ts,.js}'],
        // entities: [User, Comment, Password],
        autoLoadEntities: true,
        synchronize: true,
        ssl: {
            rejectUnauthorized: false
        }
    };
  }
}