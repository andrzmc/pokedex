import PokeListCardLayout from '@/components/layouts/cards/poke/list';
import ScreenLayout from '@/components/layouts/screen';
import PaginatorTemplate from '@/components/templates/paginator';
import { GET_POKE_LIST_QUERY } from '@/services/graphql/pokeapi';
import { PokeListMapperService } from '@/services/utilities/pokeapi';
import React from 'react';

const MainHomeScreen = () => {
  return (
    <ScreenLayout header={{ title: 'Pokédex' }}>
      <PaginatorTemplate
        query={GET_POKE_LIST_QUERY}
        interceptor={PokeListMapperService}
        limit={20}
        renderItem={item => <PokeListCardLayout {...item} />}
      />
    </ScreenLayout>
  );
};

export default MainHomeScreen;
