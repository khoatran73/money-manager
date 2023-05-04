import React from 'react';

import { ComboOption, GridClassNameCol } from '@/types/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { FieldErrors, useForm } from 'react-hook-form';
import { MixedSchema, NumberSchema, ObjectShape, StringSchema, number, object, string } from 'yup';
import CustomPasswordField from './fields/CustomPasswordField';
import CustomSelectField from './fields/CustomSelectField';
import CustomTextField from './fields/CustomTextField';
import CustomDatePickerField from './fields/CustomDatePickerField';
import CustomImagePickerField from './fields/CustomImagePickerField';
import { mixed } from 'yup';
import { ObjectSchema } from 'yup';

export interface Props {
    fields: FormField[];
    initialValues?: Record<string, any>;
}

export interface FormField {
    name: string;
    classNameCol: GridClassNameCol;
    type?: 'text' | 'number' | 'positive' | 'password' | 'select' | 'date' | 'image';
    label?: string;
    required?: boolean;
    disabled?: boolean;
    options?: ComboOption[];
}

// interface ref ...

const convertObjectShape = (fields: FormField[]): ObjectShape => {
    const objectShape: ObjectShape = {};

    fields.forEach((field) => {
        let schemaItem: StringSchema | NumberSchema | ObjectSchema<any> | MixedSchema = string();

        // type
        switch (field.type) {
            case 'text':
                schemaItem = string();
                break;
            case 'number':
                schemaItem = number();
                break;

            case 'positive':
                schemaItem = number().positive();
                break;
            case 'image':
                const _2MbSize = 2097152;
                schemaItem = mixed().test('fileSize', 'The file is too large', (value?: File | any) => {
                    if (!value) return true; // attachment is optional
                    return value.size <= _2MbSize;
                });
                break;
            default:
                break;
        }

        // required
        if (field.required) schemaItem = schemaItem.required();

        Object.assign(objectShape, {
            [field.name]: schemaItem,
        });
    });

    return objectShape;
};

const CustomForm: React.FC<Props> = ({ fields, initialValues }) => {
    const schema = object().shape(convertObjectShape(fields));

    const { handleSubmit, control, getValues } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(schema),
    });

    const onSubmit = (formValues: Record<string, any>) => {
        console.log('formValues: ', formValues);
    };

    const onError = (errors: FieldErrors<Record<string, any>>) => {
        console.log('errors: ', errors);
    };

    const renderField = (field: FormField) => {
        switch (field.type) {
            case 'text':
                return <CustomTextField {...field} control={control} />;
            case 'number':
                return <CustomTextField {...field} control={control} />;
            case 'positive':
                return <CustomTextField {...field} type="number" control={control} />;
            case 'password':
                return <CustomPasswordField {...field} control={control} />;
            case 'select':
                return <CustomSelectField {...field} control={control} />;
            case 'date':
                return <CustomDatePickerField {...field} control={control} />;
            case 'image':
                return <CustomImagePickerField {...field} control={control} />;
            default:
                return <></>;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className="grid grid-cols-12 gap-4">
                {fields.map((field) => {
                    return (
                        <div className={field.classNameCol} key={field.name}>
                            {renderField(field)}
                        </div>
                    );
                })}
            </div>
            <div className="w-full mt-6 flex items-center justify-end">
                <Button variant="contained" type="submit">
                    Lưu
                </Button>
            </div>
        </form>
    );
};

export default CustomForm;
