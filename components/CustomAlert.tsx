import { Alert, AlertColor, Snackbar } from '@mui/material';
import { forwardRef, useImperativeHandle, useState } from 'react';

export interface Props {}

export interface CustomAlertRef {
    onOpen: (type: AlertColor, message: string) => void;
    onClose: () => void;
}

const CustomAlert = forwardRef<CustomAlertRef, Props>((props, ref) => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<AlertColor>('success');
    const [message, setMessage] = useState<string>('Thao tác thành công!');

    const onClose = () => setOpen(false);
    const onOpen = (type: AlertColor, message: string) => {
        setOpen(true);
        setType(type);
        setMessage(message);
    };

    useImperativeHandle(
        ref,
        () => ({
            onOpen,
            onClose,
        }),
        []
    );

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose} severity={type} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
});

CustomAlert.displayName = 'CustomAlert';

export default CustomAlert;
