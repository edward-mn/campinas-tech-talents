import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CostumerController } from './controllers/costumer.controller';
import { costumerService } from './services/costumer-service';

@Module({
  imports: [],
  controllers: [AppController, CostumerController],
  providers: [AppService, costumerService],
})
export class AppModule {}
