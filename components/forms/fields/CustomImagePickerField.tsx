import { Typography } from '@mui/material';
import Image from 'next/image';
import React, { ChangeEvent } from 'react';

import { Control, Controller } from 'react-hook-form';
import { FormField } from '../CustomForm';
import { error as errorColor, neutral as neutralColor } from '@/theme/colors';
import _ from 'lodash';

interface ImagePickerProps extends Partial<FormField> {
    onChange?: (file?: File) => void;
    error?: boolean;
    helperText?: string;
    value?: File;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
    disabled,
    required,
    name,
    onChange,
    error,
    helperText,
    value,
}) => {
    const [uploadState, setUploadState] = React.useState('initial');
    const [image, setImage] = React.useState<string>('');

    const handleUploadClick = (event: ChangeEvent<HTMLInputElement>) => {
        var file = event.target.files?.[0];
        onChange?.(file);
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = function (e) {
                setImage(reader.result as string);
                setUploadState('uploaded');
            };
        }
    };

    return (
        <div className="">
            <div className="w-full h-36 rounded-lg relative">
                <input
                    type="file"
                    className="hidden"
                    style={{
                        borderRadius: 'inherit',
                    }}
                    id={`image-picker-field${name}`}
                    accept="image/*"
                    onChange={handleUploadClick}
                />
                <label
                    htmlFor={`image-picker-field${name}`}
                    className="w-full h-full flex z-10 relative cursor-pointer"
                >
                    {image ? (
                        <Image
                            src={image}
                            alt=""
                            width={0}
                            height={0}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    ) : (
                        <div className="px-[14px] py-[16.5px]">
                            <Typography
                                variant="caption"
                                className="block"
                                sx={{
                                    color: 'neutral.500',
                                }}
                            >
                                Hình ảnh
                            </Typography>
                            <div>
                                Drop file to attach, or{' '}
                                <span className="text-green-500">browse</span>
                            </div>
                            <Typography
                                className="block"
                                variant="caption"
                                sx={{
                                    color: 'neutral.600',
                                }}
                            >
                                Image file formats - JPG, JPEG, PNG, GIF
                            </Typography>
                            <Typography
                                variant="caption"
                                className="block"
                                sx={{
                                    color: 'neutral.600',
                                }}
                            >
                                Image size less than 2MB
                            </Typography>
                        </div>
                    )}
                </label>
                <fieldset
                    className="w-full h-full absolute top-0 left-0 right-0 bottom-0 border"
                    style={{
                        borderRadius: 'inherit',
                        borderColor: error ? _.get(errorColor, 'main') : neutralColor[200],
                        transition:
                            'border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    }}
                ></fieldset>
            </div>
            {helperText && (
                <p
                    className="text-xs mt-[3px] mx-3.5 leading-[1.66]"
                    style={{
                        color: _.get(errorColor, 'main'),
                    }}
                >
                    {helperText}
                </p>
            )}
        </div>
    );
};

export interface Props extends FormField {
    control: Control<any>;
}

const CustomImagePickerField: React.FC<Props> = ({ control, name, ...props }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => {
                return (
                    <ImagePicker
                        {...props}
                        onChange={onChange}
                        value={value}
                        error={invalid}
                        helperText={error?.message}
                    />
                );
            }}
        />
    );
};

export default CustomImagePickerField;
