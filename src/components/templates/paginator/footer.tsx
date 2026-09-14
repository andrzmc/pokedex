import ErrorStatusCardLayout from '@/components/layouts/cards/status/error';
import LoaderUi from '@/components/ui/loader';
import { FooterPaginatorTemplateProps } from '@/models/interfaces/templates';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const FooterPaginatorTemplate: FC<FooterPaginatorTemplateProps> = ({
  loading,
  catalog,
  errorStatus,
}) => {
  return (
    <View style={styles.container}>
      {loading && catalog?.items?.length ? (
        <LoaderUi size="small" />
      ) : errorStatus?.message && catalog?.items?.length ? (
        <ErrorStatusCardLayout message={errorStatus.message} size="small" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default FooterPaginatorTemplate;
