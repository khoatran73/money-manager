import React from 'react';
import CustomMenuItem from './CustomMenuItem';
import CustomSubMenu from './CustomSubMenu';

export interface MenuProps {
    icon?: React.ReactNode;
    text?: string | React.ReactNode;
    children?: MenuProps[];
    level?: number;
    onClick?: (value: any) => void;
}

export interface CustomMenuProps {
    menus: MenuProps[];
}

const CustomMenu: React.FC<CustomMenuProps> = ({ menus }) => {
    const renderMenu = (listMenus: MenuProps[]) => {
        return listMenus.map((menu, index) => {
            if (!menu.children) {
                return (
                    <CustomMenuItem
                        key={index}
                        icon={menu.icon}
                        text={menu.text}
                        level={menu.level}
                    />
                );
            } else {
                return (
                    <CustomSubMenu key={index} icon={menu.icon} text={menu.text} level={menu.level}>
                        {renderMenu(menu.children)}
                    </CustomSubMenu>
                );
            }
        });
    };

    return <div>{renderMenu(menus)}</div>;
};

export default CustomMenu;
