import { CategoryRequestDto } from '@/types/category';
import { TransactionType } from '@/types/shared';
import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextField from '@/components/forms/fields/CustomTextField';
import CustomForm from '@/components/forms/CustomForm';

export interface Props {}

const initState: CategoryRequestDto = {
    backgroundColor: '#000000',
    color: '#fff',
    iconStr: '',
    index: 0,
    level: 0,
    name: '',
    type: TransactionType.Expense,
};

const CategoryForm: React.FC<Props> = (props) => {
    // const schema = yup.object().shape({
    //     backgroundColor: yup.string().required('Vui lòng chọn màu nền'),
    //     color: yup.string().required('Vui lòng chọn màu'),
    //     iconStr: yup.string().required('Vui lòng chọn biểu tượng'),
    //     name: yup.string().required('Vui lòng nhập tên'),
    //     index: yup
    //         .number()
    //         .positive('Phải lớn hơn 0')
    //         .integer('Phải là số nguyên')
    //         .required('Vui lòng nhập index'),
    //     level: yup
    //         .number()
    //         .positive('Phải lớn hơn 0')
    //         .integer('Phải là số nguyên')
    //         .required('Vui lòng nhập cấp'),
    // });

    // const { handleSubmit, control, formState } = useForm({
    //     defaultValues: initState,
    //     resolver: yupResolver(schema),
    // });

    const onSubmit = (formValues: CategoryRequestDto) => {
        console.log('formValues: ', formValues);
    };

    const onError = (errors: FieldErrors<CategoryRequestDto>) => {};

    return (
        <div>
            <CustomForm
                fields={[
                    {
                        name: 'text',
                        classNameCol: 'col-span-6',
                        label: 'text',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'number',
                        classNameCol: 'col-span-6',
                        label: 'number',
                        type: 'number',
                        required: true,
                    },
                    {
                        name: 'positive',
                        classNameCol: 'col-span-6',
                        label: 'positive',
                        type: 'positive',
                        required: true,
                    },
                    {
                        name: 'password',
                        classNameCol: 'col-span-6',
                        label: 'password',
                        type: 'password',
                        required: true,
                    },
                    {
                        name: 'select',
                        classNameCol: 'col-span-6',
                        label: 'select',
                        type: 'select',
                        required: true,
                        options: [
                            {
                                value: 1,
                                label: '1',
                            },
                            {
                                value: 2,
                                label: '2',
                            },
                            {
                                value: 3,
                                label: '3',
                            },
                            {
                                value: 4,
                                label: '4',
                            },
                            {
                                value: 5,
                                label: '5',
                            },
                        ],
                    },
                    {
                        name: 'date',
                        classNameCol: 'col-span-6',
                        label: 'date',
                        type: 'date',
                        required: true,
                    },
                    {
                        name: 'image',
                        classNameCol: 'col-span-6',
                        label: 'image',
                        type: 'image',
                        required: true,
                    },
                ]}
            />
        </div>
    );
};

export default CategoryForm;
