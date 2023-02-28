import { Injectable } from '@nestjs/common';
import { QueryService } from './query/query.service';

@Injectable()
export class AppService {
  constructor(private queryService: QueryService) {}

  getMarketDetails(market: string): string {
    const service = this.queryService.getQuery(market);
    return `Market: ${service.execute()}`;
  }
}
