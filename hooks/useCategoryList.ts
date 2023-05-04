import useSwr from 'swr';
import fetcher from '@/libs/fetcher';

const useCategoryList = () => {
    const { data, error, isLoading } = useSwr('/api/category/list', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return {
        data,
        error,
        isLoading,
    };
};

export default useCategoryList;
