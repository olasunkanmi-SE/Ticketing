import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '@tickets-microservice/ticket-shared-kernel';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
