import {NavLink} from "react-router-dom";
import React from "react";
import {CardProduct} from "../../card-product";

const dataProducts = [
    {
        id: 1,
        name: 'Samsung Galaxy Note 21',
        description: '',
        price: 29900000,
        oldPrice: 29900000,
        discount: 99,
        url:'/',
        image:'/assets/image/tech/smart-phone/apple-iphone-12-mini-5.png'
    },
    {
        id: 2,
        name: 'bbb',
        description: '',
        price: 29900000,
        oldPrice: 0,
        discount: 0,
        url:'/',
        image:'/assets/image/tech/smart-phone/iphone-12-pro-max-ba-c.png'
    },
    {
        id: 3,
        name: 'iPhone XR - Vàng Chính Hãng VN/A',
        description: '',
        price: 99,
        oldPrice: 29900000,
        discount: 5,
        url:'/',
        image:'/assets/image/tech/smart-phone/xiaomi-mi-10t-pro.png'
    },
    {
        id: 4,
        name: 'ddd',
        description: '',
        price: 29900000,
        oldPrice: 29900000,
        discount: 13,
        url:'/',
        image:'/assets/image/tech/smart-phone/xiaomi-mi-10t-pro.png'
    },
    {
        id: 5,
        name: 'ddd',
        description: '',
        price: 99,
        oldPrice: 29900000,
        discount: 99,
        url:'/',
        image:'/assets/image/tech/smart-phone/xiaomi-mi-10t-pro.png'
    },
    {
        id: 6,
        name: 'iPhone XR - Vàng Chính Hãng VN/A',
        description: '',
        price: 29000000,
        oldPrice: 29900000,
        discount: 2,
        url:'/',
        image:'/assets/image/tech/smart-phone/xiaomi-mi-10t-pro.png'
    }
];
export const ListProduct = () => {
    return (
        <div className={''}>
            <div className={'flex justify-between items-center border-b-2 border-[#eb3e32]'}>
                <div className={'px-5 py-1.5 bg-[#eb3e32] rounded-t-md'}>
                    <p className={'text-lg font-bold text-white uppercase'}>Đồ công nghệ</p>
                </div>
                <ul className={'flex items-center gap-5'}>
                    <li>
                        <NavLink to={'/'} className={'font-bold hover:text-[#ffb416]'}>Điện thoại - Máy tính
                            bảng</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className={'font-bold hover:text-[#ffb416]'}>Phụ kiện - Thiết bị
                            số</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className={'font-bold hover:text-[#ffb416]'}>Máy ảnh - Quay
                            phim</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className={'font-bold hover:text-[#ffb416]'}>Điện gia dụng - Nhà
                            bếp</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className={'font-bold hover:text-[#ffb416]'}>Laptop - Thiết bị
                            IT</NavLink>
                    </li>
                </ul>
            </div>
            <div className={'py-5 flex gap-2.5'}>
                <div className={'flex flex-col gap-4'}>
                    <div className={'w-[280px]'}>
                        <img src={'/assets/image/banner/tech/banner_1.png'} alt={'tech banner 1'}/>
                    </div>
                    <div className={'w-[280px]'}>
                        <img src={'/assets/image/banner/tech/banner_2.png'} alt={'tech banner 1'}/>
                    </div>
                </div>
                <div className={'grid grid-cols-4 gap-2.5'}>
                    {dataProducts.map((item) => (
                        <div key={item.id}>
                            <CardProduct title={item.name} url={item.url} image={item.image} price={item.price} oldPrice={item.oldPrice} discount={item.discount} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}