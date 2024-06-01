import requestApi from '@/libs/requestApi';
import { CategoryDto, CategoryRequestDto } from '@/types/category';
import { AxiosResponse } from 'axios';
import useSwr from 'swr';

const useCategoryList = () => {
    const { data, error, isLoading } = useSwr<AxiosResponse<CategoryDto[]>>('/api/category/list', requestApi, {
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
