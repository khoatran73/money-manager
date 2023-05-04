import { TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormField } from '../CustomForm';

interface Props extends FormField {
    control: Control<any>;
}

const CustomTextField: React.FC<Props> = ({ control, name, ...props }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => {
                return (
                    <TextField
                        {...props}
                        variant="outlined"
                        inputProps={{
                            sx: {
                                color: '#fff',
                            },
                        }}
                        sx={{
                            '& fieldset': { boxShadow: 'none !important' },
                        }}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        fullWidth
                        error={invalid}
                        helperText={error?.message}
                    />
                );
            }}
        />
    );
};

export default CustomTextField;
