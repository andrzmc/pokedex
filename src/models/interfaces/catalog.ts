import { DocumentNode } from '@apollo/client';

export interface CatalogItem {
  value: number | string;
  label: string;
  tags?: (number | string)[];
  background?: string;
  images?: string[];
}

export interface CatalogResponse {
  total: number;
  items: CatalogItem[];
}

export interface PaginatorTemplateProps {
  query: DocumentNode;
  interceptor: (data: any) => CatalogResponse;
  limit?: number;
  offsetInitial?: number;
  renderItem?: (item: CatalogItem) => React.ReactElement;
  renderEmpty?: React.ReactElement | null;
  renderLoader?: React.ReactElement | null;
  numColumns?: number;
  onItemsChange?: (items: CatalogItem[]) => void;
}

