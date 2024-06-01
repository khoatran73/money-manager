import {
    Card,
    Dialog,
    DialogTitle,
    IconButton,
    Modal,
    SvgIcon,
    Typography,
    useTheme,
} from '@mui/material';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { styled, Box, Theme } from '@mui/system';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
    title: React.ReactNode;
    body: React.ReactNode;
    footer?: {
        hasSaveButton?: boolean;
        hasCloseButton?: boolean;
        renderAdditionButton?: () => JSX.Element;
    };
    width?: string | number;
}

export interface CustomModalRef {
    onOpen: () => void;
    onClose: () => void;
}

const CustomModal = forwardRef<CustomModalRef, Props>(({ width, title, body, footer }, ref) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useImperativeHandle(
        ref,
        () => ({
            onOpen: handleOpen,
            onClose: handleClose,
        }),
        []
    );

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            sx={{
                minWidth: 400,
                maxWidth: '100vw',
                borderRadius: 0,
                bgcolor: 'transparent',
            }}
            PaperProps={{
                sx: {
                    minWidth: 400,
                    maxWidth: '100vw',
                    width: width ?? 400,
                },
            }}
        >
            <Typography
                variant="h6"
                sx={{ pt: 2, px: 3 }}
                display="flex"
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <div>{title}</div>
                <div className="w-6 h-6 rounded-full duration-300">
                    <IconButton onClick={handleClose}>
                        <SvgIcon fontSize="small">
                            <XMarkIcon />
                        </SvgIcon>
                    </IconButton>
                </div>
            </Typography>
            <div className="p-6">{body}</div>
        </Dialog>
    );
});

CustomModal.displayName = 'CustomModal';

export default CustomModal;
