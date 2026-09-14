import PokeListCardLayout from '@/components/layouts/cards/poke/list';
import ScreenLayout from '@/components/layouts/screen';
import PaginatorTemplate from '@/components/templates/paginator';
import IconUi from '@/components/ui/icon';
import { GET_POKE_LIST_QUERY } from '@/services/graphql/pokeapi';
import { PokeListMapperService } from '@/services/utilities/pokeapi';
import { RootStackParamList } from '@/models/types/navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

const MainHomeScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScreenLayout
      header={{
        title: 'Pokédex',
        childrenLeft: (
          <IconUi
            name="bx-menu"
            onPress={() => navigate('Profile', { screen: 'Home' })}
          />
        ),
      }}
    >
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
