import { Controller, Get } from '@nestjs/common';

import { AppService } from '@tickets-microservice/ticket-shared-kernel';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
