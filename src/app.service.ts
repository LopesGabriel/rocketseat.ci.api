import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const now = new Date();
    const currentTime = now.toLocaleString(new Intl.Locale('pt-BR'));
    return `Hello, Gabriel! The current time is ${currentTime}.`;
  }
}
