import { Query } from '../query.interface';

export class QueryPE implements Query {
  execute(): string {
    return 'PE';
  }
}
