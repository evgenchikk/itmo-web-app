import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';


@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WsGateway {//implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  // @WebSocketServer() server: Server;

  // @SubscribeMessage('msgToServer')
  // handleMessage(client: Socket, payload: string): void {
  //   this.server.emit('msgToClient', payload);
  // }

  // afterInit(server: Server) {

  // }

  // handleDisconnect(client: Socket) {

  // }

  // handleConnection(client: Socket, ...args: any[]) {

  // }
}
