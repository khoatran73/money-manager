import { error as errorColor } from '@/theme/colors';
import { FormControl, FormHelperText } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import _ from 'lodash';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormField } from '../CustomForm';

interface Props extends FormField {
    control: Control<any>;
}

const CustomDatePickerField: React.FC<Props> = ({ control, name, ...props }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => {
                return (
                    <FormControl fullWidth error={invalid} className="relative">
                        <DatePicker
                            label={props.label}
                            sx={{
                                '& .MuiFilledInput-root': error
                                    ? {
                                          borderColor: _.get(errorColor, 'main'),
                                      }
                                    : {},
                                '& .MuiFilledInput-root.Mui-focused': {
                                    borderWidth: '2px',
                                },
                                '& label': error
                                    ? {
                                          color: _.get(errorColor, 'main'),
                                      }
                                    : {},
                                '& label.Mui-focused': error
                                    ? {
                                          color: _.get(errorColor, 'main'),
                                      }
                                    : {},
                            }}
                            value={value}
                            onChange={onChange}
                            slotProps={{
                                textField: {
                                    required: true,
                                },
                            }}
                            className="h-[53.13px]"
                            format="dd/MM/yyyy"
                        />
                        {error?.message && <FormHelperText>{error.message}</FormHelperText>}
                    </FormControl>
                );
            }}
        />
    );
};

export default CustomDatePickerField;
