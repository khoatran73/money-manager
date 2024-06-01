import requestApi from '@/libs/requestApi';
import { ComboOption } from '@/types/shared';
import { AxiosResponse } from 'axios';
import useSwr from 'swr';

const useCategoryImageCombo = () => {
    const { data, error, isLoading } = useSwr<AxiosResponse<ComboOption[]>>(
        '/api/category/image/combo',
        requestApi,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );
    return {
        data,
        error,
        isLoading,
    };
};

export default useCategoryImageCombo;
