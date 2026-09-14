# Paginator Template

## Description

A smart container component built around `FlatList` and `@apollo/client` to handle infinite scrolling and data pagination automatically. It takes care of executing the GraphQL query, managing the `offset` and `limit`, intercepting/transforming the response, and rendering the appropriate loading and error states using the application's UI standards (`LoaderUi` and `ErrorStatusCardLayout`).

## Usage

```jsx
import { gql } from '@apollo/client';
import PaginatorTemplate from '@/components/templates/paginator';

const GET_POKEMONS = gql`
  query GetPokemons($limit: Int, $offset: Int) {
    # your graphql query here
  }
`;

// Transform the raw GraphQL data into the CatalogResponse format
const transformData = (data) => {
  return {
    total: data.totalCount,
    items: data.items.map(item => ({
      value: item.id,
      label: item.name,
    }))
  };
};

// Basic usage
<PaginatorTemplate
  query={GET_POKEMONS}
  interceptor={transformData}
/>

// Advanced usage (custom render, columns, limit)
<PaginatorTemplate
  query={GET_POKEMONS}
  interceptor={transformData}
  limit={20}
  numColumns={2}
  renderItem={(item) => <MyCustomCard item={item} />}
/>
```

## Props

| Name              | Type                                        | Required | Default | Description                                                                                                |
| :---------------- | :------------------------------------------ | :------: | :-----: | :--------------------------------------------------------------------------------------------------------- |
| **query**         | `DocumentNode`                              |   Yes    |    -    | The GraphQL query to be executed by Apollo Client. It must accept `$limit` and `$offset` variables.        |
| **interceptor**   | `(data: any) => CatalogResponse`            |   Yes    |    -    | Function to map the raw API response to the standard `CatalogResponse` interface required by the template. |
| **limit**         | `number`                                    |    No    |  `10`   | Defines how many items should be fetched per request.                                                      |
| **offsetInitial** | `number`                                    |    No    |    -    | Initial offset to start fetching data from.                                                                |
| **renderItem**    | `(item: CatalogItem) => React.ReactElement` |    No    |    -    | Custom render function for each list item. If not provided, it falls back to a default `CardUi`.           |
| **numColumns**    | `number`                                    |    No    |    -    | Renders the data in a grid with the specified number of columns.                                           |
| **onItemsChange** | `(items: CatalogItem[]) => void`            |    No    |    -    | Optional callback that gets triggered whenever the item list gets updated.                                 |
