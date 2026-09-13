import PokeCoverCardLayout from '@/components/layouts/cards/poke/cover';
import ScreenLayout from '@/components/layouts/screen';
import { DetailLayoutProps } from '@/models/interfaces/layouts';
import { GET_POKE_INFO_QUERY } from '@/services/graphql/pokeapi';
import { PokeInfoMapperService } from '@/services/utilities/pokeapi';
import { ErrorLike } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

const DetailHomeScreen = () => {
  const { params } = useRoute();

  const { loading, error, data } = useQuery(GET_POKE_INFO_QUERY, {
    variables: { id: (params as any).id },
    notifyOnNetworkStatusChange: true,
  });

  const [info, setInfo] = useState<DetailLayoutProps>();
  const [errorStatus, setErrorStatus] = useState<ErrorLike>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const init = () => {
    if (!data || loading) {
      return;
    }

    if (error) {
      setErrorStatus(error);
      return;
    }

    handleTransformData();
  };

  const handleTransformData = () => {
    try {
      setInfo(PokeInfoMapperService(data as any));
    } catch {
      setErrorStatus({ message: 'error transform data', name: '' });
    }
  };

  return (
    <ScreenLayout>{info && <PokeCoverCardLayout {...info} />}</ScreenLayout>
  );
};

export default DetailHomeScreen;
