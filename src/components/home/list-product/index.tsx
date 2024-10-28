import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {CardProduct} from "../../card-product";
import {getApi} from "../../../shared/helper/function";
import {ListProductsType} from "../../../shared/types/list-products-type";

export const ListProduct = () => {
    const [data, setData] = useState<ListProductsType[]>([]);
    useEffect(()=>{
        getApi<ListProductsType[]>('/data/list-products.json')
            .then(data => setData(data))
            .catch(err => console.log(err));
    },[]);

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
                <div className={'grid grid-cols-4 gap-2.5 w-full relative'}>
                    {data[0] ? data.map((item,index) => (
                        <div key={index}>
                            <CardProduct product={item} />
                        </div>
                    )) : <div className={'col-span-4 flex justify-center items-center'}>Hiện tại không có sản phẩm</div>}
                </div>
            </div>
        </div>
    )
}