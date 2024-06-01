import { FormField } from '@/components/forms/CustomForm';

export const CategoryImageFields: FormField[] = [
    {
        name: 'image',
        classNameCol: 'col-span-12',
        label: 'Ảnh',
        type: 'image',
        required: true,
    },
    {
        name: 'name',
        classNameCol: 'col-span-12',
        label: 'Tên ảnh',
        type: 'text',
    },
];
