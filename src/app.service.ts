import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


var ServerResponseTime: number;


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getServerResponseTime(): number {
    return ServerResponseTime;
  }
}


@Injectable()
export class ServerResponseTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => ServerResponseTime = Date.now() - now)
    );
  }
}