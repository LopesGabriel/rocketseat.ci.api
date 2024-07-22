import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string = 'World'): string {
    const now = new Date();
    const currentTime = now.toLocaleString(new Intl.Locale('pt-BR'));
    return `Hello, ${name}! The current time is ${currentTime}.`;
  }
}
