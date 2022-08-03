import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  enviar({ message }: { message: string }) {
    return `Voce disse: ${message}`;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
