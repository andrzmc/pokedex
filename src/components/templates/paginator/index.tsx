import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import {
  CatalogResponse,
  PaginatorTemplateProps,
} from '@/models/interfaces/catalog';
import { ErrorLike } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

const PaginatorTemplate: FC<PaginatorTemplateProps> = ({
  query,
  interceptor,
  limit = 10,
}) => {
  const [catalog, setCatalog] = useState<CatalogResponse>();
  const [errorStatus, setErrorStatus] = useState<ErrorLike>();

  const { loading, error, data, fetchMore, networkStatus } = useQuery(query, {
    variables: { limit, offset: 0 },
    notifyOnNetworkStatusChange: true,
  });

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

    handleTransformData(data);
  };

  const handleTransformData = (value: Object) => {
    if (!interceptor) {
      setCatalog(value as CatalogResponse);
      return;
    }

    try {
      setCatalog(interceptor(value));
    } catch {
      setErrorStatus({ message: 'error transform data', name: '' });
    }
  };

  const handleLoadMore = () => {
    if (networkStatus === 3 || loading || !catalog?.items) return;

    fetchMore({
      variables: { offset: catalog.items.length, limit },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const prevData = prev as Record<string, any>;
        const newData = fetchMoreResult as Record<string, any>;

        return {
          ...newData.total,
          items: [...prevData.items, ...newData.items],
        };
      },
    });
  };

  return (
    <>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : null}

      {errorStatus?.message ? (
        <TypographyUi>{errorStatus.message}</TypographyUi>
      ) : null}

      {catalog ? (
        <FlatList
          data={catalog.items}
          keyExtractor={item => item.value as string}
          renderItem={({ item }) => <CardUi>
                <TypographyUi weight="bold">{item.label}</TypographyUi>
              </CardUi>}
          onEndReachedThreshold={0.4}
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});

export default PaginatorTemplate;
