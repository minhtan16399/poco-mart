import React from "react";
import SearchIcon from "../../shared/icon/search-icon";
import {NavLink} from "react-router-dom";
import {ArowIcon} from "../../shared/icon/arow-icon";
import {CartIcon} from "../../shared/icon/cart-icon";
import {HeartIcon} from "../../shared/icon/heart-icon";

const Logo = '/assets/image/logo/logo.png';
const callIcon = '/assets/icon/call.png';
const usersIcon = '/assets/icon/users.png';

const Header: React.FC = () => {
    return (
        <header id={'header'} className={'py-2.5'}>
            <div className={'container mx-auto px-2.5 flex items-center justify-between gap-8'}>
                <div id={'header-logo'}>
                    <img className={'h-9'} src={Logo} alt={'logo'} />
                </div>
                <div id={'search-icon-tool'} className={'w-1/3 border border-red-600 rounded-lg overflow-hidden'}>
                    <form className={'flex justify-between items-center gap-1 py-2 px-2.5'}>
                        <input className={'bg-transparent outline-none w-full'} placeholder={'Tìm sản phẩm ...'}/>
                        <button className={'size-4'}>
                            <SearchIcon/>
                        </button>
                    </form>
                </div>
                <div className={'flex justify-center items-center gap-8'}>
                    <div id={'header-contact'} className={'flex items-center justify-center gap-3'}>
                        <div className={'size-8'}>
                            <img src={callIcon} alt={'call'} />
                        </div>
                        <div>
                            <p>
                                Tư vấn hỗ trợ
                            </p>
                            <NavLink className={'text-red-600 font-semibold text-lg'} to={'tel:19006750'}>
                                19006750
                            </NavLink>
                        </div>
                    </div>
                    <div id={'header-user'} className={'flex justify-center items-center gap-3'}>
                        <div className={'size-8'}>
                            <img src={usersIcon} alt={'call'} />
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
                <div className={'flex items-center justify-center gap-5'}>
                    <div className={'size-8'}>
                        <HeartIcon/>
                    </div>
                    <div className={'size-8'}>
                        <CartIcon/>
                    </div>
                    <div className={'size-8'}>
                        <ArowIcon/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;