import CustomAlert, { CustomAlertRef } from '@/components/CustomAlert';
import CustomForm from '@/components/forms/CustomForm';
import { CategoryImageRequestDto, CategoryRequestDto } from '@/types/category';
import React, { useRef } from 'react';
import { FieldErrors } from 'react-hook-form';
import { CategoryImageFields } from '../configs/CategoryImageConfig';
import requestApi, { convertToFormData } from '@/libs/requestApi';

interface Props {}

const CategoryImageForm: React.FC<Props> = (props) => {
    const alertRef = useRef<CustomAlertRef>(null);

    const onSubmit = async (formValues: CategoryImageRequestDto) => {
        const formData = convertToFormData(formValues);

        const response = await requestApi('/api/category/image/create', 'post', formData);

        console.log('response: ', response);
    };

    const onError = (errors: FieldErrors<CategoryImageRequestDto>) => {
        alertRef.current?.onOpen('error', 'Vui lòng nhập đủ thông tin!');
    };

    return (
        <div>
            <CustomForm onSubmit={onSubmit} onError={onError} fields={CategoryImageFields} />
            <CustomAlert ref={alertRef} />
        </div>
    );
};

export default CategoryImageForm;
