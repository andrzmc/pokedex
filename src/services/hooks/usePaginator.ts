import { useState, useEffect, useRef } from 'react';
import { ErrorLike } from '@apollo/client';
import { CatalogResponse } from '@/models/interfaces/templates';
import { useQuery } from '@apollo/client/react';
import { UsePaginatorProps } from '@/models/interfaces/services/hooks/paginator';

export const usePaginator = ({
  query,
  interceptor,
  limit,
}: UsePaginatorProps) => {
  const currentOffset = useRef(0);
  const isFetchingMore = useRef(false);

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
      const parsed = value as CatalogResponse;
      setCatalog(parsed);
      if (parsed?.items) currentOffset.current = parsed.items.length;
      return;
    }

    try {
      const parsed = interceptor(value);
      setCatalog(parsed);
      if (parsed?.items) currentOffset.current = parsed.items.length;
    } catch {
      setErrorStatus({ message: 'error transform data', name: '' });
    }
  };

  const handleLoadMore = async () => {
    if (
      networkStatus === 3 ||
      loading ||
      !catalog?.items ||
      isFetchingMore.current ||
      (catalog.total && currentOffset.current >= catalog.total)
    ) {
      return;
    }

    isFetchingMore.current = true;
    try {
      await fetchMore({
        variables: { offset: currentOffset.current, limit },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          const prevData = prev as Record<string, any>;
          const newData = fetchMoreResult as Record<string, any>;

          return {
            ...prevData,
            total: prevData.total,
            items: [...prevData.items, ...newData.items],
          };
        },
      });
    } finally {
      isFetchingMore.current = false;
    }
  };

  return {
    catalog,
    errorStatus,
    loading,
    handleLoadMore,
  };
};
