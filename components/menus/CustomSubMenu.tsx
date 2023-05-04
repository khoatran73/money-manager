import React, { PropsWithChildren, useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    SvgIcon,
    Typography,
    Card,
    Avatar,
    Divider,
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';
import { MenuProps } from './CustomMenu';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface Props extends Pick<MenuProps, 'icon' | 'text' | 'level'>, PropsWithChildren {}

const CustomSubMenu: React.FC<Props> = ({ icon, text, level = 0, children }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => setOpen((pre) => !pre);

    return (
        <>
            <div className="flex items-center">
                <div style={{ width: level * 56 }}></div>
                <ListItemButton onClick={handleClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    {text && <ListItemText primary={text} />}
                    {open ? (
                        <ChevronDownIcon width={14} height={14} />
                    ) : (
                        <ChevronUpIcon width={14} height={14} />
                    )}
                </ListItemButton>
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    );
};

export default CustomSubMenu;
