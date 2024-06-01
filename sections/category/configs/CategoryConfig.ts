import { FormField } from '@/components/forms/CustomForm';
import { CategoryImageRequestDto, CategoryRequestDto } from '@/types/category';
import { ComboOption, TransactionType } from '@/types/shared';

const nameof = <T>(name: Extract<keyof T, string>): string => name;

export const getCategoryFields = (comboImg: ComboOption[]): FormField[] => {
    return [
        {
            name: nameof<CategoryRequestDto>('name'),
            classNameCol: 'col-span-6',
            label: 'Tên danh mục',
            type: 'text',
            required: true,
        },
        {
            name: nameof<CategoryRequestDto>('index'),
            classNameCol: 'col-span-6',
            label: 'Vị trí',
            type: 'number',
            required: true,
        },
        {
            name: nameof<CategoryRequestDto>('type'),
            classNameCol: 'col-span-6',
            label: 'Loại',
            type: 'select',
            required: true,
            options: [
                {
                    value: TransactionType.Expense,
                    label: 'Khoản thu',
                },
                {
                    value: TransactionType.Income,
                    label: 'Khoản chi',
                },
            ],
        },
        {
            name: nameof<CategoryRequestDto>('imageId'),
            classNameCol: 'col-span-6',
            label: 'Biểu tượng',
            type: 'select',
            required: true,
            options: comboImg,
        },
    ];
};
