import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { MenuProps } from './CustomMenu';

interface Props extends Pick<MenuProps, 'icon' | 'text' | 'level'> {}

const CustomMenuItem: React.FC<Props> = ({ icon, text, level = 0 }) => {
    return (
        <>
            <ListItemButton>
                <div style={{ width: level * 56 }} />
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                {text && <ListItemText primary={text} />}
            </ListItemButton>
        </>
    );
};

export default CustomMenuItem;
