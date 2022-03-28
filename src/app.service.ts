import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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