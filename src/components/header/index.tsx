import React from "react";
import SearchIcon from "../../shared/icon/search-icon";
import {NavLink} from "react-router-dom";
import {ArrowIcon} from "../../shared/icon/arow-icon";
import {CartIcon} from "../../shared/icon/cart-icon";
import {HeartIcon} from "../../shared/icon/heart-icon";
import {Cart} from "../cart";

const Logo = '/assets/image/logo/logo.png';
const callIcon = '/assets/icon/call.png';
const usersIcon = '/assets/icon/users.png';

const Header: React.FC = () => {

    return (
        <header id={'header'} className={'py-4'}>
            <div className={'container mx-auto flex items-center justify-between gap-5 lg:gap-8 px-2 md:px-10 lg:px-0'}>
                <div id={'header-logo'}>
                    <img className={'max-h-11'} src={Logo} alt={'logo'} />
                </div>
                <div className={'w-1/2 flex items-center gap-5'}>
                    <div id={'search-icon-tool'} className={'w-full lg:w-3/5 border border-red-600 rounded-lg overflow-hidden'}>
                        <form className={'flex justify-between items-center gap-1 py-2.5 px-3'}>
                            <input className={'bg-transparent outline-none w-full'} placeholder={'Tìm sản phẩm ...'}/>
                            <button className={'size-6'}>
                                <SearchIcon/>
                            </button>
                        </form>
                    </div>
                    <div className={'hidden md:flex justify-center items-center gap-5 text-nowrap'}>
                        <div id={'header-contact'} className={'hidden lg:flex items-center justify-center gap-3'}>
                            <div className={'size-8'}>
                                <img src={callIcon} alt={'call'}/>
                            </div>
                            <div>
                                <p>
                                    Tư vấn hỗ trợ
                                </p>
                                <NavLink className={'text-red-600 font-semibold text-lg leading-5'} to={'tel:19006750'}>
                                    19006750
                                </NavLink>
                            </div>
                        </div>
                        <div id={'header-user'} className={'flex justify-center items-center gap-3'}>
                            <div className={'size-8'}>
                                <img src={usersIcon} alt={'call'}/>
                            </div>
                            <div>
                                <p>
                                    Xin chào!
                                </p>
                                <NavLink className={'text-red-600 font-semibold'} to={'/login'}>
                                    Đăng nhập
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex items-center justify-center gap-5'}>
                    <div className={'hidden lg:block size-6'}>
                        <HeartIcon/>
                    </div>
                    <div className={'relative'}>
                        <Cart className={'size-6'} label={<CartIcon/>}/>
                    </div>
                    <div className={'hidden lg:block size-6'}>
                        <ArrowIcon/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;