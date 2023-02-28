import { Injectable } from '@nestjs/common';
import { QueryPE } from './implementation/pe';
import { Query } from './query.interface';

@Injectable()
export class QueryService {
  getQuery(market: string): Query {
    switch (market) {
      case 'pe':
        return new QueryPE();
      default:
        throw new Error(`No implementation found for '${market}'`);
    }
  }
}
