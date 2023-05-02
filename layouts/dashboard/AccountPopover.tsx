import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useCallback } from 'react';

interface Props {
    anchorEl?: null | Element | ((element: Element) => Element);
    open: boolean;
    onClose?: () => void;
}

const AccountPopover: React.FC<Props> = ({ anchorEl, onClose, open }) => {
    const handleSignOut = useCallback(() => {
        onClose?.();
        signOut();
    }, [onClose]);

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
            }}
            onClose={onClose}
            open={open}
            PaperProps={{ sx: { width: 200 } }}
        >
            <Box
                sx={{
                    py: 1.5,
                    px: 2,
                }}
            >
                <Typography variant="overline">Account</Typography>
                <Typography color="text.secondary" variant="body2">
                    Anika Visser
                </Typography>
            </Box>
            <Divider />
            <MenuList
                disablePadding
                dense
                sx={{
                    p: '8px',
                    '& > *': {
                        borderRadius: 1,
                    },
                }}
            >
                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            </MenuList>
        </Popover>
    );
};

export default AccountPopover;
