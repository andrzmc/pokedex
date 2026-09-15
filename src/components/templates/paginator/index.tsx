import ErrorStatusCardLayout from '@/components/layouts/cards/status/error';
import { CardUi } from '@/components/ui/card';
import LoaderUi from '@/components/ui/loader';
import { TypographyUi } from '@/components/ui/typography';
import {
  CatalogItem,
  CatalogResponse,
  PaginatorTemplateProps,
} from '@/models/interfaces/templates';
import { ErrorLike } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import React, { FC, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FooterPaginatorTemplate from './footer';

const PaginatorTemplate: FC<PaginatorTemplateProps> = ({
  query,
  interceptor,
  limit = 10,
  numColumns,
  renderItem,
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
          total: prevData.total,
          items: [...prevData.items, ...newData.items],
        };
      },
    });
  };

  return (
    <>
      {loading && !catalog?.items?.length && <LoaderUi size="big" />}

      {errorStatus?.message && !catalog?.items?.length && (
        <ErrorStatusCardLayout message={errorStatus.message} size="title" />
      )}

      {catalog && catalog.items?.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={
            numColumns && numColumns > 1 ? styles.columnWrapper : undefined
          }
          data={catalog.items}
          keyExtractor={(item, index) => `${item.value}-${index}`}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {renderItem ? (
                renderItem(item as CatalogItem)
              ) : (
                <CardUi>
                  <TypographyUi weight="bold">{item.label}</TypographyUi>
                </CardUi>
              )}
            </View>
          )}
          numColumns={numColumns}
          onEndReachedThreshold={0.4}
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <FooterPaginatorTemplate
              loading={loading}
              catalog={catalog}
              errorStatus={errorStatus}
            />
          }
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
  contentContainer: {
    gap: 10,
  },
  columnWrapper: {
    gap: 10,
  },
  itemContainer: {
    flex: 1,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default PaginatorTemplate;
