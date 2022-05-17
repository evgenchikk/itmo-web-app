import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Error as STError } from 'supertokens-node';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';


@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = context.switchToHttp();

    let err = undefined;
    const req = ctx.getRequest();
    const resp = ctx.getResponse();

    await verifySession() (
      req,
      resp,
      (res) => {
        err = res;
      },
    );

    if (resp.headersSent) {
      throw new STError({
        message: "RESPONSE_SENT",
        type: "RESPONSE_SENT",
      });
    }

    if (err) {
      throw err;
    }

    return true;
  }
}