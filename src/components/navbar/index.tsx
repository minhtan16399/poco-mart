import React from "react";
import {Dropdown, type MenuProps, Space} from "antd";
import {NavLink} from "react-router-dom";
import {CaretDownIcon} from "../../shared/icon/caret-down-icon";

const items: MenuProps['items'] = [
    {
        key: '1',
        type: 'group',
        label: 'Group title',
        children: [
            {
                key: '1-1',
                label: '1st menu item',
            },
            {
                key: '1-2',
                label: '2nd menu item',
            },
        ],
    },
    {
        key: '2',
        label: 'sub menu',
        children: [
            {
                key: '2-1',
                label: '3rd menu item',
            },
            {
                key: '2-2',
                label: '4th menu item',
            },
        ],
    },
    {
        key: '3',
        label: 'disabled sub menu',
        disabled: true,
        children: [
            {
                key: '3-1',
                label: '5d menu item',
            },
            {
                key: '3-2',
                label: '6th menu item',
            },
        ],
    },
];

const Navbar: React.FC = () => {
    return (
        <nav id={'navbar'} className={'bg-[#eb3e32]'}>
            <div className={'container mx-auto flex items-center px-2 md:px-10 lg:px-0'}>
                <div className={'nav-menu-product before:hidden lg:before:block py-3 relative w-1/2 lg:w-1/4'}>
                    <Dropdown menu={{ items }}>
                        <NavLink to={'/'} onClick={(e) => e.preventDefault()}>
                            <Space>
                                <span className={'w-full nav-menu-product-title relative text-white font-bold py-3 pl-6'}>Danh mục sản phẩm</span>
                            </Space>
                        </NavLink>
                    </Dropdown>
                </div>
                <div className={'relative'}>
                    <ul className={'absolute hidden lg:relative lg:flex items-center gap-10'}>
                        <li><NavLink className={'text-white hover:text-[#ffb416]'} to={'/'}>Trang chủ</NavLink></li>
                        <li><NavLink className={'text-white hover:text-[#ffb416]'} to={'/'}>Giới thiệu</NavLink></li>
                        <li><NavLink className={'text-white hover:text-[#ffb416] flex items-center justify-center gap-1'} to={'/'}>
                            Sản phẩm
                            <div className={'w-2.5 flex justify-center items-center'}><CaretDownIcon/></div>
                        </NavLink></li>
                        <li><NavLink className={'text-white hover:text-[#ffb416] flex items-center justify-center gap-1'} to={'/'}>
                            Tin mới nhất
                            <div className={'w-2.5 flex justify-center items-center'}><CaretDownIcon/></div>
                        </NavLink></li>
                        <li><NavLink className={'text-white hover:text-[#ffb416]'} to={'/'}>Câu hỏi thường gặp</NavLink></li>
                        <li><NavLink className={'text-white hover:text-[#ffb416]'} to={'/'}>Tuyển dụng</NavLink></li>
                        <li><NavLink className={'text-white hover:text-[#ffb416]'} to={'/'}>Liên hệ</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;