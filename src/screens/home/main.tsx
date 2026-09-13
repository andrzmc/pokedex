import ScreenLayout from '@/components/layouts/screen';
import PaginatorTemplate from '@/components/templates/paginator';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import { CatalogItem } from '@/models/interfaces/catalog';
import { GET_POKE_LIST_QUERY } from '@/services/graphql/pokeapi';
import { PokeListMapperService } from '@/services/utilities/pokeapi';
import React from 'react';

const MainHomeScreen = () => {
  return (
    <ScreenLayout>
      <TypographyUi size="title">Main Home Screen</TypographyUi>
      <PaginatorTemplate
        query={GET_POKE_LIST_QUERY}
        interceptor={PokeListMapperService}
        limit={20}
        renderItem={(item: CatalogItem) => (
          <CardUi>
            <TypographyUi weight="bold">{item.label}</TypographyUi>
          </CardUi>
        )}
      />
    </ScreenLayout>
  );
};

export default MainHomeScreen;
