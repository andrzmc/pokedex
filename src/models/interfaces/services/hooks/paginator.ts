import { DocumentNode } from 'graphql';
import { CatalogResponse } from '../../templates';

export interface UsePaginatorProps {
  query: DocumentNode;
  interceptor?: (value: any) => CatalogResponse;
  limit: number;
}
