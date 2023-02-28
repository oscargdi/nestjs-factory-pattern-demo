import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/market/:market')
  getMarketDetails(@Param('market') market: string): string {
    return this.appService.getMarketDetails(market);
  }
}
