import ErrorStatusCardLayout from '@/components/layouts/cards/status/error';
import { CardUi } from '@/components/ui/card';
import LoaderUi from '@/components/ui/loader';
import { TypographyUi } from '@/components/ui/typography';
import {
  CatalogItem,
  PaginatorTemplateProps,
} from '@/models/interfaces/templates';
import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FooterPaginatorTemplate from './footer';
import { usePaginator } from '../../../services/hooks/usePaginator';

const PaginatorTemplate: FC<PaginatorTemplateProps> = ({
  query,
  interceptor,
  limit = 10,
  numColumns,
  renderItem,
}) => {
  const { catalog, errorStatus, loading, handleLoadMore } = usePaginator({
    query,
    interceptor,
    limit,
  });

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
